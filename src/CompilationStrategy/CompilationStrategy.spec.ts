import CompilationStrategy from "./CompilationStrategy";
import {FsStreamService} from "../FsStreamService/FsStreamService";

describe("CompilationStrategy", () => {

	let compilationStrategy: CompilationStrategy;

	beforeAll(() => {

		compilationStrategy = new CompilationStrategy();

		compilationStrategy.compilationLevels = {
			simple: jest.fn(),
			advanced: jest.fn()
		};

	});

	describe("when asked to compile advanced", () => {

		it("will call compile on the advanced class", () => {

			compilationStrategy.compile('advanced', [{src: 'some src files', output: 'some output file'}], './test');

			expect(compilationStrategy.compilationLevels.advanced).toBeCalledTimes(1);
			expect(compilationStrategy.compilationLevels.advanced)
				.toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test', FsStreamService);

		});

	});

	describe("when asked to compile simple", () => {

		it("will call compile on the simple class", () => {

			compilationStrategy.compile('simple', [{src: 'some src files', output: 'some output file'}], './test');

			expect(compilationStrategy.compilationLevels.simple).toBeCalledTimes(1);
			expect(compilationStrategy.compilationLevels.simple)
				.toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test', FsStreamService);

		});

	});

	// describe("when asked to compile whitespace", () => {
	//
	// 	it("will call compile on the whitespace class", () => {
	//
	// 		compilationStrategy.compile('whitespace', [{src: 'some src files', output: 'some output file'}], './test');
	//
	// 		expect(compilationStrategy.compilationLevels.whitespace.compile).toBeCalledTimes(1);
	// 		expect(compilationStrategy.compilationLevels.whitespace.compile)
	// 			.toHaveBeenCalledWith([{src: 'some src files', output: 'some output file'}], './test', FsStreamService);
	//
	// 	});
	//
	// });

});
