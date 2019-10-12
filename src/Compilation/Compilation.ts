import FsService from "../FsService/FsService";
import FsStreamService from "../FsStreamService/FsStreamService";

export interface File {
	src: string;
	outputFile: string;
}

export class Compilation {

	public closureCompiler: any;

	constructor(private googleClosureCompiler: any) {

		this.closureCompiler = googleClosureCompiler;

	}

	compile(files: File[], outputDestination: string, StreamService: any) {

		if (!FsService.doesPathExist(outputDestination)) {

			FsService.createDirectory(outputDestination);

		}

		files.forEach((file: File) => {

			const streamService = new StreamService(file.src, `${outputDestination}/${file.outputFile}`);

			streamService.readFileContents((error: string | null, data: string[]) => {

				if (error) {

					throw new Error(error);

				}

				this.closureCompiler.run([{
					src: data.join(''),
				}], this.handleOutput.bind(this, streamService));

			});

		});

	}

	handleOutput(streamService: FsStreamService, exitCode: string, output: any, error: string) {

		if (error) {

			throw new Error(`Exiting with code ${exitCode} error: ${error}`);

		}

		streamService.writeFileContents(output[0].src);

	};

}

