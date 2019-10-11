import {CompilationLevel} from "../../index";
import FsStreamService from "../FsStreamService/FsStreamService";
import CompilationStrategy from "./CompilationStrategy";

describe("CompilationStrategy", () => {

	let compilationStrategy: CompilationStrategy;

	beforeAll(() => {

		compilationStrategy = new CompilationStrategy();

		compilationStrategy.compilationLevels = {
			simple: jest.fn(),
			advanced: jest.fn(),
			whitespace: jest.fn()
		};

	});

	describe("when asked to compile advanced", () => {

		it("will call compile on the advanced class", () => {

			compilationStrategy.compile(CompilationLevel.Advanced, [{
				src: 'some src files',
				output: 'some output file'
			}], './test');

			expect(compilationStrategy.compilationLevels.advanced).toBeCalledTimes(1);
			expect(compilationStrategy.compilationLevels.advanced)
				.toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test', FsStreamService);

		});

	});

	describe("when asked to compile simple", () => {

		it("will call compile on the simple class", () => {

			compilationStrategy.compile(CompilationLevel.Simple, [{
				src: 'some src files',
				output: 'some output file'
			}], './test');

			expect(compilationStrategy.compilationLevels.simple).toBeCalledTimes(1);
			expect(compilationStrategy.compilationLevels.simple)
				.toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test', FsStreamService);

		});

	});

	describe("when asked to compile whitespace", () => {

		it("will call compile on the whitespace class", () => {

			compilationStrategy.compile(CompilationLevel.Whitespace, [{
				src: 'some src files', output: 'some output file'
			}], './test');

			expect(compilationStrategy.compilationLevels.whitespace).toBeCalledTimes(1);
			expect(compilationStrategy.compilationLevels.whitespace)
				.toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test', FsStreamService);

		});

	});

});
