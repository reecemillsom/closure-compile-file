import AdvancedMock from "../CompilationLevels/Advanced/AdvancedMock";
import SimpleMock from "../CompilationLevels/Simple/SimpleMock";
import WhitespaceMock from "../CompilationLevels/Whitespace/WhitespaceMock";
import GoogleClosureCompilerMock from "../GoogleClosureCompiler/GoogleClosureCompileMock";
import CompilationStrategy from "./CompilationStrategy";

describe("CompilationStrategy", () => {

  	let compilationStrategy: CompilationStrategy;

  	beforeAll(() => {

		compilationStrategy = new CompilationStrategy();

		compilationStrategy.compilationLevels = {
			whitespace: new WhitespaceMock(GoogleClosureCompilerMock as any),
		  	simple: new SimpleMock(GoogleClosureCompilerMock as any),
		  	advanced: new AdvancedMock(GoogleClosureCompilerMock as any)
		};

		compilationStrategy.compilationLevels.whitespace.compile = jest.fn();
		compilationStrategy.compilationLevels.simple.compile = jest.fn();
		compilationStrategy.compilationLevels.advanced.compile = jest.fn();

  	});

    describe("when asked to compile advanced", () => {

        it("will call compile on the advanced class", () => {

          	compilationStrategy.compile('advanced', [{src: 'some src files', output: 'some output file'}], './test');

            expect(compilationStrategy.compilationLevels.advanced.compile).toBeCalledTimes(1);
            expect(compilationStrategy.compilationLevels.advanced.compile).toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test');

        });

    });

	describe("when asked to compile simple", () => {

		it("will call compile on the simple class", () => {

		  compilationStrategy.compile('simple', [{src: 'some src files', output: 'some output file'}], './test');

		  expect(compilationStrategy.compilationLevels.simple.compile).toBeCalledTimes(1);
		  expect(compilationStrategy.compilationLevels.simple.compile).toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test');

		});

	});

	describe("when asked to compile whitespace", () => {

		it("will call compile on the whitespace class", () => {

		  compilationStrategy.compile('whitespace', [{src: 'some src files', output: 'some output file'}], './test');

		  expect(compilationStrategy.compilationLevels.whitespace.compile).toBeCalledTimes(1);
		  expect(compilationStrategy.compilationLevels.whitespace.compile).toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test');

		});

	});

});
