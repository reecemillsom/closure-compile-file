import {Advanced} from "../CompilationLevels/Advanced/Advanced";
import {Simple} from "../CompilationLevels/Simple/Simple";
import {Whitespace} from "../CompilationLevels/Whitespace/Whitespace";

export default class CompilationStrategy {

  public compilationLevels: any;

  constructor() {

    this.compilationLevels = {
      whitespace: new Whitespace(),
	  simple: new Simple(),
	  advanced: new Advanced()
	};

  }


  compile(compilationLevel: string, files: string[], outputDestination: string) {

	return this.compilationLevels[compilationLevel].compile(files, outputDestination);

  }

}
