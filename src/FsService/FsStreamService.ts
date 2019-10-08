import ReadableStream = NodeJS.ReadableStream;
import WritableStream = NodeJS.WritableStream;

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

  //TODO this isn't going to work this way because the compiler function doesn't know to wait for when the the contents have stopped being read.
  //TODO maybe this function takes a callback, and once the 'end' event is fired calls back with data.
  readFileContents() {

	this.readableStream.on('data', (chunk) => {
	  this.data.push(chunk);
	});

	this.readableStream.on('error', (error) => {
	  //TODO this will probably need tweaking. As error is an object.
	  console.log(`Error ${error} occurred when reading file ${this.inputDestination}`);
	});

	this.readableStream.on('end', () => {
	  console.log('No more data to be read. Exiting successfully');
	});

  }

}
