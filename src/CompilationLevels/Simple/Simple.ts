import {FsService} from "../../FsService/FsService";
import {Compilation, File} from "../Compilation";

export class Simple implements Compilation {

  public googleClosureCompiler: any;

  constructor(private GoogleClosureCompiler: any) {

    this.googleClosureCompiler = GoogleClosureCompiler;

  }

  compile(files: File[], outputDestination: string) {

    this.initialiseGoogleCompiler();

	files.forEach((file: File) => {

	  const contents = FsService.readFileContents(file.src, {
		encoding: 'utf8',
		flag: 'r'
	  });


	  if (!FsService.doesPathExist(outputDestination)) {

		FsService.createDirectory(outputDestination);

	  }

	  this.googleClosureCompiler.run([{
	  	src: contents
	  }], this.handleOutput.bind(this, file, outputDestination));

	});

  }

  handleOutput(file: File, outputDestination: string, exitCode: string, output: any, error: string) {

	if (error) {

	  throw new Error(`Exiting with code ${exitCode} error: ${error}`);

	}

	if (FsService.doesPathExist(`${outputDestination}/${file.output}`)) {

	  return FsService.writeFileContents(`${outputDestination}/${file.output}`, output[0].src, {
		encoding: 'utf8',
		flag: 'a',
	  });

	}

	FsService.writeFileContents(`${outputDestination}/${file.output}`, output[0].src, {
	  encoding: 'utf8',
	  flag: 'w',
	});

  };

  initialiseGoogleCompiler() {

	this.googleClosureCompiler = new this.googleClosureCompiler({
	  compilation_level: "SIMPLE",
	});

  }

}
