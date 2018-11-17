import {FsService} from "../../FsService/FsService";
import Compilation from "../Compilation";

export default class Simple implements Compilation {

  public googleClosureCompiler: any;

  constructor(private GoogleClosureCompiler: any) {

    this.googleClosureCompiler = GoogleClosureCompiler;

  }

  //TODO when using compiler, flags needed at least are compilationLevel, jsOutputFile, JS as array of strings.
  //TODO change any array to string array
  compile(files: any[], outputDestination: string) {

    this.initialiseGoogleCompiler(files, outputDestination);

    console.log('closureCompiler>', this.googleClosureCompiler);

    //TODO check this is correct. Probably have to run through all contents in the array reading the path and outputting
	//TODO the data.

	const contents = FsService.readFileContents(files[0].src);
	FsService.createDirectory('./test');

	console.log('contents>', contents);

	this.googleClosureCompiler.run([{
	  src: contents
	}], (exitCode: string, output: string, error: string) => {
	    console.log('exitCode>', exitCode);
	    console.log('output>', output);
	    console.log('error>', error);
	});
    // this.googleClosureCompiler.run([{
    //   path: files[0].path,
	//   src: files[0].src,
	// }],(exitCode: string, output: string, error: string) => {
	//   console.log('exitCode>', exitCode);
    //   console.log('output>', output);
    //   console.log('error>', error);
	// });

  }

  initialiseGoogleCompiler(files: string[], outputDestination: string) {

    this.googleClosureCompiler = new this.googleClosureCompiler({
	  compilation_level: "SIMPLE",
	  js_output_file: outputDestination,
	});

  }

}
