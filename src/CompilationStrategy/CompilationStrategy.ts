const ClosureCompiler = require('google-closure-compiler').jsCompiler;
import {Advanced} from "../CompilationLevels/Advanced/Advanced";
import {Simple} from "../CompilationLevels/Simple/Simple";
import {Whitespace} from "../CompilationLevels/Whitespace/Whitespace";
import {File} from "../CompilationLevels/Compilation";

export default class CompilationStrategy {

  public compilationLevels: any;

  constructor() {

    this.compilationLevels = {
      whitespace: new Whitespace(),
	  simple: new Simple(new ClosureCompiler({
		compilation_level: "SIMPLE",
	  })),
	  advanced: new Advanced()
	};

  }


  compile(compilationLevel: string, files: File[], outputDestination: string) {

	return this.compilationLevels[compilationLevel].compile(files, outputDestination);

  }

}
