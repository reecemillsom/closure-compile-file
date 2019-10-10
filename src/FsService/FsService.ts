const fs = require('fs');

export class FsService {

	constructor() {}

	static createDirectory(path: string, options?: any) {

		fs.mkdirSync(path, options);

	}

	static doesPathExist(path: string) {

		return fs.existsSync(path);

	}

}
