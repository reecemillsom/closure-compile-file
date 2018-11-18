import GoogleClosureCompileMock from "../../GoogleClosureCompiler/GoogleClosureCompileMock";
import {Simple} from "./Simple";
import {FsService} from "../../FsService/FsService";

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

			  FsService.readFileContents = jest.fn().mockReturnValue('some content');
			  FsService.doesPathExist = jest.fn().mockReturnValue(false);
			  FsService.writeFileContents = jest.fn();

			  FsService.createDirectory = jest.fn();

			  simple.compile([{src: 'some src files', output: 'some output file'}], './output');

			  expect(FsService.createDirectory).toHaveBeenCalledWith('./output');

			});

		});

		describe("when compiler run throws an error", () => {

		    it("will throw an error to return to the user", () => {

			  FsService.readFileContents = jest.fn().mockReturnValue('fail');
			  FsService.createDirectory = jest.fn();

			  expect(() => {

				simple.compile([{ src: 'some src files', output: 'some output files' }], './output');

			  }).toThrow('Exiting with code 1 error: something went wrong');


			});

		});

		describe("when compiler does not throw an error", () => {

		    describe("when output file already exists", () => {

		        it("will call write file contents with the write data", () => {

				  FsService.readFileContents = jest.fn().mockReturnValue('some content');
				  FsService.doesPathExist = jest.fn()
					  .mockImplementationOnce(() => false)
					  .mockImplementationOnce(() => true);

				  FsService.writeFileContents = jest.fn();

				  simple.compile([{ src: 'some src files', output: 'some output files' }], './output');

				  expect(FsService.writeFileContents).toHaveBeenCalledWith('./output/some output files', 'we have some content', {
				    encoding: 'utf8',
					flag: 'a'
				  });

		        });

		    });

		    describe("when output file does not exist", () => {

		        it("will call write file contents with the write data", () => {

				  FsService.readFileContents = jest.fn().mockReturnValue('some content');
				  FsService.doesPathExist = jest.fn()
					  .mockImplementationOnce(() => false)
					  .mockImplementationOnce(() => false);

				  FsService.writeFileContents = jest.fn();

				  simple.compile([{ src: 'some src files', output: 'some output files' }], './output');

				  expect(FsService.writeFileContents).toHaveBeenCalledWith('./output/some output files', 'we have some content', {
					encoding: 'utf8',
					flag: 'w'
				  });

				});

		    });

		});

        it("will call run on google closure compiler", () => {

			FsService.readFileContents = jest.fn().mockReturnValue('some content');
			FsService.writeFileContents = jest.fn();
			closureCompiler.run = jest.fn();

            simple.compile([{src: 'some src files', output: 'some output file'}], './output');

            expect(simple.closureCompiler.run).toHaveBeenCalledWith([{ src: 'some content' }], expect.any(Function));

        });

    });

});
