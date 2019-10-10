import ReadableStream = NodeJS.ReadableStream;
import WritableStream = NodeJS.WritableStream;
import {Readable} from "stream";

const fs = require('fs');

export class FsStreamService {

  private readableStream: ReadableStream;
  private writableStream: WritableStream;
  readonly data: string[];

  constructor(private inputDestination: string, private outputDestination: string) {

	this.readableStream = fs.createReadStream(inputDestination, {
	  flags: 'r',
	  encoding: 'utf8',
	});

	this.writableStream = fs.createWriteStream(outputDestination, {
	  flags: 'w',
	  encoding: 'utf8'
	});

	this.data = [];
  }

  readFileContents(callback: (error: string | null, data: string[]) => void) {

	this.readableStream.on('data', (chunk) => {
	  this.data.push(chunk);
	});

	this.readableStream.on('error', (error) => {
	  return callback(`Error ${error} occurred when reading file ${this.inputDestination}`, []);
	});

	this.readableStream.on('end', () => {
	  return callback(null, this.data);
	});

  }

  writeFileContents(compiledContents: string) {

  	const readableStream = new Readable();

  	readableStream.push(compiledContents);
  	readableStream.push(null); //TODO why is this needed (Saw this online)? Without these reading from the readable for some reason it errors. Need to figure this out.

  	readableStream.on('data', (chunk) => {

  		this.writableStream.write(chunk.toString());

	});

  }

}
