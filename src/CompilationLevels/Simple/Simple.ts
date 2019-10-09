import {FsService} from "../../FsService/FsService";
import {Compilation, File} from "../Compilation";
import {FsStreamService} from "../../FsService/FsStreamService";

export class Simple implements Compilation {

  public closureCompiler: any;

  //TODO inject FsStreamService
  constructor(private googleClosureCompiler: any) {

    this.closureCompiler = googleClosureCompiler;

  }

  //TODO read each file into a stream.
  compile(files: File[], outputDestination: string) {

    if (!FsService.doesPathExist(outputDestination)) {

	  FsService.createDirectory(outputDestination);

    }

	files.forEach((file: File) => {
	  //TODO this isn't being tested properly, refactor so it can be injected into function or constructor.
	  const fsStreamService = new FsStreamService(file.src, `${outputDestination}/${file.output}`);

	  fsStreamService.readFileContents((error, data) => {

		if (error) {

			throw new Error(error);

		}

		this.closureCompiler.run([{
			src: data.join(''),
		}], this.handleOutput.bind(this, file, outputDestination, fsStreamService));

	  });

	});

  }

  handleOutput(file: File, outputDestination: string, streamService: FsStreamService, exitCode: string, output: any, error: string) {

	if (error) {

	  throw new Error(`Exiting with code ${exitCode} error: ${error}`);

	}

	streamService.writeFileContents(output[0].src);

  };

}
