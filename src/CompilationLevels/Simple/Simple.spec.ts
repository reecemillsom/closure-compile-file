import GoogleClosureCompileMock from "../../GoogleClosureCompiler/GoogleClosureCompileMock";
import {Simple} from "./Simple";

describe("Simple", () => {

  	let ClosureCompiler;
  	let simple: Simple;

  	beforeAll(() => {

  	  	ClosureCompiler = GoogleClosureCompileMock;

  	    simple = new Simple(ClosureCompiler);

  	});

  	describe("when asked to initialise", () => {

  	    it("will assign google compiler", () => {

  	        expect(simple.googleClosureCompiler).toEqual(GoogleClosureCompileMock);

  	    });

  	});

    describe("when asked to compile", () => {

        it("will initialise the google compiler", () => {

            simple.compile([{src: 'some src files', output: 'some output file'}], "./output");

            expect(simple.googleClosureCompiler).toBeInstanceOf(GoogleClosureCompileMock);

        });

    });

});
