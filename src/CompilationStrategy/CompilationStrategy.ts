const ClosureCompiler = require('google-closure-compiler').jsCompiler;
import {Advanced} from "../CompilationLevels/Advanced/Advanced";
import {File} from "../CompilationLevels/Compilation";
import {Simple} from "../CompilationLevels/Simple/Simple";
import {Whitespace} from "../CompilationLevels/Whitespace/Whitespace";

export default class CompilationStrategy {

  public compilationLevels: any;

  constructor() {

    this.compilationLevels = {
      whitespace: new Whitespace(),
	  simple: new Simple(new ClosureCompiler({
		compilation_level: "SIMPLE_OPTIMIZATIONS",
	  })),
	  advanced: new Advanced(new ClosureCompiler({
		compilation_level: "ADVANCED_OPTIMIZATIONS",
	  }))
	};

  }


  compile(compilationLevel: string, files: File[], outputDestination: string) {

	return this.compilationLevels[compilationLevel].compile(files, outputDestination);

  }

}
