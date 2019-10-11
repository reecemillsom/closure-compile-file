import {File} from "./src/Compilation/Compilation";
import CompilationStrategy from "./src/CompilationStrategy/CompilationStrategy";

enum CompilationLevel {
	Simple = 'simple',
	Whitespace = 'whitespace',
	Advanced = 'advanced'
}

export function compile(compilationLevel: CompilationLevel, files: File[], outputDestination: string) {

	const compilationStrategy = new CompilationStrategy();

	return compilationStrategy.compile(compilationLevel, files, outputDestination);

}
