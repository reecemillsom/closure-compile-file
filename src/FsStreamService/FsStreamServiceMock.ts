
export class FsStreamServiceMock {

	public readError: boolean = false;
	public compilationError: boolean = false;

	constructor(private inputDestination: string, private outputDestination: string) {

		if (inputDestination === '../test.js') {

			this.readError = true;

		} else if (inputDestination === '../test1.js') {

			this.compilationError = true;

		}

	}


	readFileContents(callback: any) {

		if (this.readError) {

			return callback('Something went wrong', []);

		}

		if (this.compilationError) {

			return callback(null, ['fail']);

		}

		return callback(null, ['a', 'b']);

	}

	writeFileContents() {}

}
