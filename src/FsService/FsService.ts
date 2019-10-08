const fs = require('fs');

export interface FileSyncOptions {
  encoding?: string;
  flag?: string;
}

export interface WriteFileSyncOptions extends FileSyncOptions {
	mode?: number;
}

export class FsService {

	constructor() {}

	static createDirectory(path: string, options?: any) {

	  fs.mkdirSync(path, options);

	}

	static doesPathExist(path: string) {

	  return fs.existsSync(path);

	}

	static readFileContents(filePath: string, options?: FileSyncOptions) {

	  let contents: string;

	  try {

	    contents = fs.readFileSync(filePath, options);

	    console.log('contents>', contents);

	  } catch(error) {

	    return error;

	  }

	  return contents;

	}

	static writeFileContents(filePath: string, data: string, options?: WriteFileSyncOptions) {

	  fs.writeFileSync(filePath, data, options);

	}

}
