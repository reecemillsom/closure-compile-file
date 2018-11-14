import CompilationStrategy from "./CompilationStrategy";
import AdvancedMock from "../CompilationLevels/Advanced/AdvancedMock";
import SimpleMock from "../CompilationLevels/Simple/SimpleMock";
import WhitespaceMock from "../CompilationLevels/Whitespace/WhitespaceMock";

describe("CompilationStrategy", () => {

  	let compilationStrategy: CompilationStrategy;

  	beforeAll(() => {

		compilationStrategy = new CompilationStrategy();

		compilationStrategy.compilationLevels = {
			whitespace: new WhitespaceMock(),
		  	simple: new SimpleMock(),
		  	advanced: new AdvancedMock()
		};

		compilationStrategy.compilationLevels.whitespace.compile = jest.fn();
		compilationStrategy.compilationLevels.simple.compile = jest.fn();
		compilationStrategy.compilationLevels.advanced.compile = jest.fn();

  	});

    describe("when asked to compile advanced", () => {

        it("will call compile on the advanced class", () => {

          	compilationStrategy.compile('advanced', 'file.jpg', './test');

            expect(compilationStrategy.compilationLevels.advanced.compile).toBeCalledTimes(1);
            expect(compilationStrategy.compilationLevels.advanced.compile).toHaveBeenCalledWith('file.jpg', './test');

        });

    });

  describe("when asked to compile simple", () => {

	it("will call compile on the simple class", () => {

	  compilationStrategy.compile('simple', 'file.jpg', './test');

	  expect(compilationStrategy.compilationLevels.simple.compile).toBeCalledTimes(1);
	  expect(compilationStrategy.compilationLevels.simple.compile).toHaveBeenCalledWith('file.jpg', './test');

	});

  });

  describe("when asked to compile whitespace", () => {

	it("will call compile on the whitespace class", () => {

	  compilationStrategy.compile('whitespace', 'file.jpg', './test');

	  expect(compilationStrategy.compilationLevels.whitespace.compile).toBeCalledTimes(1);
	  expect(compilationStrategy.compilationLevels.whitespace.compile).toHaveBeenCalledWith('file.jpg', './test');

	});

  });

});
