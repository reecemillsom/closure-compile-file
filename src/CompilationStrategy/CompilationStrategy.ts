import {CompilationLevel} from "../../index";

const ClosureCompiler = require('google-closure-compiler').jsCompiler;
import {Compilation, File} from "../Compilation/Compilation";
import FsStreamService from "../FsStreamService/FsStreamService";

export default class CompilationStrategy {

	public compilationLevels: any;

	constructor() {

		this.compilationLevels = {
			simple: (files: File[], outputDestination: string, streamService: FsStreamService) =>
				this.simple(files, outputDestination, new ClosureCompiler({
					compilation_level: "SIMPLE_OPTIMIZATIONS"
				}), streamService),
			advanced: (files: File[], outputDestination: string, streamService: FsStreamService) =>
				this.advanced(files, outputDestination, new ClosureCompiler({
					compilation_level: "ADVANCED_OPTIMIZATIONS"
				}), streamService),
			whitespace: (files: File[], outputDestination: string, streamService: FsStreamService) =>
				this.whitespace(files, outputDestination, new ClosureCompiler({
					compilation_level: "WHITESPACE_ONLY"
				}), streamService)
		}

	}


	compile(compilationLevel: CompilationLevel, files: File[], outputDestination: string) {

		return this.compilationLevels[compilationLevel](files, outputDestination, FsStreamService);

	}

	private simple(files: File[], outputDestination: string, closureCompiler: any, streamService: FsStreamService) {

		const compilation = new Compilation(closureCompiler);

		return compilation.compile(files, outputDestination, streamService);

	}

	private advanced(files: File[], outputDestination: string, closureCompiler: any, streamService: FsStreamService) {

		const compilation = new Compilation(closureCompiler);

		return compilation.compile(files, outputDestination, streamService);

	}

	private whitespace(files: File[], outputDestination: string, closureCompiler: any, streamService: FsStreamService) {

		const compilation = new Compilation(closureCompiler);

		return compilation.compile(files, outputDestination, streamService);

	}

}
