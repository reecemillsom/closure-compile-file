import {FsStreamService} from "../FsStreamService/FsStreamService";
import {FsService} from "../FsService/FsService";

export interface File {
	src: string; //TODO should be called srcFile
	output: string; //TODO should be called outputFile
}

export class Compilation {

	public closureCompiler: any;

	constructor(private googleClosureCompiler: any) {

		this.closureCompiler = googleClosureCompiler;

	}

	compile(files: File[], outputDestination: string, StreamService: any) { //TODO why is this not type FsStreamService.

		if (!FsService.doesPathExist(outputDestination)) {

			FsService.createDirectory(outputDestination);

		}

		files.forEach((file: File) => {

			const streamService = new StreamService(file.src, `${outputDestination}/${file.output}`);

			streamService.readFileContents((error: any, data: any) => { //TODO why are these any's??

				if (error) {

					throw new Error(error);

				}

				this.closureCompiler.run([{
					src: data.join(''),
				}], this.handleOutput.bind(this, file, outputDestination, streamService));

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

