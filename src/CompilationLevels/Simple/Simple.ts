import {FsService} from "../../FsService/FsService";
import {Compilation, File} from "../Compilation";

export class Simple implements Compilation {

  public closureCompiler: any;

  //TODO inject FsStreamService
  constructor(private googleClosureCompiler: any) {

    this.closureCompiler = googleClosureCompiler;

  }

  //TODO read each file into a stream.
  compile(files: File[], outputDestination: string) {

	files.forEach((file: File) => {
	  console.log('file>', file);

	  const contents = FsService.readFileContents(file.src, {
		encoding: 'utf8',
		flag: 'r'
	  });

	  console.log('contents>', contents);


	  if (!FsService.doesPathExist(outputDestination)) {

	  	FsService.createDirectory(outputDestination);

	  }

	  this.closureCompiler.run([{
	  	src: contents
	  }], this.handleOutput.bind(this, file, outputDestination));

	});

  }

  handleOutput(file: File, outputDestination: string, exitCode: string, output: any, error: string) {

    console.log('exitCode>', exitCode);
    console.log('output>', output);
    console.log('error>', error);

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

}
