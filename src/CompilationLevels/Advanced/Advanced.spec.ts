import {FsService} from "../../FsService/FsService";
import GoogleClosureCompileMock from "../../GoogleClosureCompiler/GoogleClosureCompileMock";
import {Advanced} from "./Advanced";
import {FsStreamServiceMock} from "../../FsStreamService/FsStreamServiceMock";


describe("Advanced", () => {

	let advanced: Advanced;
	let googleClosureCompileMock: GoogleClosureCompileMock;

	beforeEach(() => {

		googleClosureCompileMock = new GoogleClosureCompileMock();

		advanced = new Advanced(googleClosureCompileMock);

	});

	describe("when asked to initialise", () => {

		it("will assign google compiler", () => {

			expect(advanced.closureCompiler).toEqual(googleClosureCompileMock);

		});

	});

	describe("when asked to compile", () => {

		describe("when directory path does not exist", () => {

			it("will create the directory", () => {

				FsService.doesPathExist = jest.fn().mockReturnValue(false);

				FsService.createDirectory = jest.fn();

				advanced.compile([{
					src: 'some src files',
					output: 'some output file'
				}], './output', FsStreamServiceMock);

				expect(FsService.createDirectory).toHaveBeenCalledWith('./output');

			});

		});

		describe("when reading file contents errors", () => {

			it("will throw an error", () => {

				expect(() => {

					advanced.compile([{
						src: '../test.js',
						output: 'some output file'
					}], './output', FsStreamServiceMock);

				}).toThrow('Something went wrong');

			});

		});

		describe("when compiler run throws an error", () => {

			it("will throw an error to return to the user", () => {

				FsService.createDirectory = jest.fn();

				expect(() => {

					advanced.compile([{src: '../test1.js', output: 'test.js'}], './output', FsStreamServiceMock);

				}).toThrow('Exiting with code 1 error: something went wrong');

			});

		});

		describe("when compiler does not throw an error", () => {

			it("will call write file contents with the right data", () => {

				expect(() => {

					advanced.compile([{
						src: 'some src files',
						output: 'some output files'
					}], './output', FsStreamServiceMock);

				}).not.toThrow('Exiting with code 1 error: something went wrong');

			});

		});

		it("will call run on google closure compiler", () => {

			googleClosureCompileMock.run = jest.fn();

			advanced.compile([{src: 'some src files', output: 'some output file'}], './output', FsStreamServiceMock);

			expect(advanced.closureCompiler.run).toHaveBeenCalledWith([{src: 'ab'}], expect.any(Function));

		});

	});

});
