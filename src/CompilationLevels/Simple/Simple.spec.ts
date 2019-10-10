import {FsService} from "../../FsService/FsService";
import GoogleClosureCompileMock from "../../GoogleClosureCompiler/GoogleClosureCompileMock";
import {Simple} from "./Simple";
import {FsStreamServiceMock} from "../../FsService/FsStreamServiceMock";

describe("Simple", () => {

  	let closureCompiler: any;
  	let simple: Simple;

  	beforeEach(() => {

  	  	closureCompiler = new GoogleClosureCompileMock();

  	    simple = new Simple(closureCompiler);

  	});

  	describe("when asked to initialise", () => {

  	    it("will assign google compiler", () => {

  	        expect(simple.closureCompiler).toEqual(closureCompiler);

  	    });

  	});

    describe("when asked to compile", () => {

		describe("when directory path does not exist", () => {

			it("will create the directory", () => {

			  FsService.doesPathExist = jest.fn().mockReturnValue(false);

			  FsService.createDirectory = jest.fn();

			  simple.compile([{src: 'some src files', output: 'some output file'}], './output', FsStreamServiceMock);

			  expect(FsService.createDirectory).toHaveBeenCalledWith('./output');

			});

		});

		describe("when reading file contents errors", () => {

		    it("will throw an error", () => {

		    	expect(() => {

					simple.compile([{src: '../test.js', output: 'some output file'}], './output', FsStreamServiceMock);

				}).toThrow('Something went wrong');


		    });

		});

		describe("when compiler run throws an error", () => {

		    it("will throw an error to return to the user", () => {

			  FsService.createDirectory = jest.fn();

			  expect(() => {

				simple.compile([{ src: '../test1.js', output: 'test.js' }], './output', FsStreamServiceMock);

			  }).toThrow('Exiting with code 1 error: something went wrong');

			});

		});

		describe("when compiler does not throw an error", () => {

		    describe("when output file already exists", () => {

		        it("will call write file contents with the write data", () => {

				  expect(() => {

				    simple.compile([{ src: 'some src files', output: 'some output files' }], './output', FsStreamServiceMock);

				  }).not.toThrow('Exiting with code 1 error: something went wrong');

		        });

		    });

		});

        it("will call run on google closure compiler", () => {

			closureCompiler.run = jest.fn();

            simple.compile([{src: 'some src files', output: 'some output file'}], './output', FsStreamServiceMock);

            expect(simple.closureCompiler.run).toHaveBeenCalledWith([{ src: 'ab' }], expect.any(Function));

        });

    });

});
