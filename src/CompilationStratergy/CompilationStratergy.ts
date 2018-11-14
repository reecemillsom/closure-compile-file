import {Advanced} from "../CompilationLevels/Advanced/Advanced";
import {Simple} from "../CompilationLevels/Simple/Simple";
import {Whitespace} from "../CompilationLevels/Whitespace/Whitespace";

export default class CompilationStrategy {

  private compilationLevels: any;

  constructor() {

    this.compilationLevels = {
      whitespace: Whitespace,
	  simple: Simple,
	  advanced: Advanced
	};

  }


  compile(compilationLevel: string, files: string | string[], outputDestination: string) {

  	const level = new this.compilationLevels[compilationLevel]();

	return level.compile(files, outputDestination);

  }

}
