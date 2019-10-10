export default class GoogleClosureCompileMock {

	run(contents: any, callback: any) {

		if (contents[0].src.includes('fail')) {

			return callback(1, undefined, 'something went wrong');

		}

		return callback(0, [{src: 'we have some content'}], undefined);

	}

}
