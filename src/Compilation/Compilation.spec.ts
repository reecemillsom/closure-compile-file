import {FsService} from "../FsService/FsService";
import GoogleClosureCompileMock from "../GoogleClosureCompiler/GoogleClosureCompileMock";
import {Compilation} from "./Compilation";
import {FsStreamServiceMock} from "../FsStreamService/FsStreamServiceMock";

describe("Compilation", () => {

	let closureCompiler: any;
	let compilation: Compilation;

	beforeEach(() => {

		closureCompiler = new GoogleClosureCompileMock();

		compilation = new Compilation(closureCompiler);

	});

	describe("when asked to initialise", () => {

		it("will assign google compiler", () => {

			expect(compilation.closureCompiler).toEqual(closureCompiler);

		});

	});

	describe("when asked to compile", () => {

		describe("when directory path does not exist", () => {

			it("will create the directory", () => {

				FsService.doesPathExist = jest.fn().mockReturnValue(false);

				FsService.createDirectory = jest.fn();

				compilation.compile([{src: 'some src files', output: 'some output file'}], './output', FsStreamServiceMock);

				expect(FsService.createDirectory).toHaveBeenCalledWith('./output');

			});

		});

		describe("when reading file contents errors", () => {

			it("will throw an error", () => {

				expect(() => {

					compilation.compile([{src: '../test.js', output: 'some output file'}], './output', FsStreamServiceMock);

				}).toThrow('Something went wrong');


			});

		});

		describe("when compiler run throws an error", () => {

			it("will throw an error to return to the user", () => {

				FsService.createDirectory = jest.fn();

				expect(() => {

					compilation.compile([{src: '../test1.js', output: 'test.js'}], './output', FsStreamServiceMock);

				}).toThrow('Exiting with code 1 error: something went wrong');

			});

		});

		describe("when compiler does not throw an error", () => {

			it("will call write file contents with the right data", () => {

				expect(() => {

					compilation.compile([{
						src: 'some src files',
						output: 'some output files'
					}], './output', FsStreamServiceMock);

				}).not.toThrow('Exiting with code 1 error: something went wrong');

			});

		});

		it("will call run on google closure compiler", () => {

			closureCompiler.run = jest.fn();

			compilation.compile([{src: 'some src files', output: 'some output file'}], './output', FsStreamServiceMock);

			expect(compilation.closureCompiler.run).toHaveBeenCalledWith([{src: 'ab'}], expect.any(Function));

		});

	});

});
