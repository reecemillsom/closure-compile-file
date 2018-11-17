import CompilationStrategy from "./src/CompilationStrategy/CompilationStrategy";

export function compile(compilationLevel: string, files: string[], outputDestination: string) {

	const compilationStrategy = new CompilationStrategy();

	//TODO if this doesn't spit out file relative to users project maybe pass compiled string back and allow them to
  	//TODO store in file or something.
	return compilationStrategy.compile(compilationLevel, files, outputDestination);

}
