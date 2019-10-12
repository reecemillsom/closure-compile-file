import {CompilationLevel} from "../../index";
const ClosureCompiler = require('google-closure-compiler').jsCompiler;
import {Compilation, File} from "../Compilation/Compilation";
import FsStreamService from "../FsStreamService/FsStreamService";

export default class CompilationStrategy {

	public compilationLevels: any;

	constructor() {

		this.compilationLevels = {
			simple: (files: File[], outputDirectory: string, streamService: FsStreamService) =>
				this.simple(files, outputDirectory, new ClosureCompiler({
					compilation_level: "SIMPLE_OPTIMIZATIONS"
				}), streamService),
			advanced: (files: File[], outputDirectory: string, streamService: FsStreamService) =>
				this.advanced(files, outputDirectory, new ClosureCompiler({
					compilation_level: "ADVANCED_OPTIMIZATIONS"
				}), streamService),
			whitespace: (files: File[], outputDirectory: string, streamService: FsStreamService) =>
				this.whitespace(files, outputDirectory, new ClosureCompiler({
					compilation_level: "WHITESPACE_ONLY"
				}), streamService)
		}

	}


	compile(compilationLevel: CompilationLevel, files: File[], outputDirectory: string) {

		return this.compilationLevels[compilationLevel](files, outputDirectory, FsStreamService);

	}

	private simple(files: File[], outputDirectory: string, closureCompiler: any, streamService: FsStreamService) {

		const compilation = new Compilation(closureCompiler);

		return compilation.compile(files, outputDirectory, streamService);

	}

	private advanced(files: File[], outputDirectory: string, closureCompiler: any, streamService: FsStreamService) {

		const compilation = new Compilation(closureCompiler);

		return compilation.compile(files, outputDirectory, streamService);

	}

	private whitespace(files: File[], outputDirectory: string, closureCompiler: any, streamService: FsStreamService) {

		const compilation = new Compilation(closureCompiler);

		return compilation.compile(files, outputDirectory, streamService);

	}

}
