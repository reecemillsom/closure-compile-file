import {File} from "./src/Compilation/Compilation";
import CompilationStrategy from "./src/CompilationStrategy/CompilationStrategy";

export enum CompilationLevel {
	Simple = 'simple',
	Whitespace = 'whitespace',
	Advanced = 'advanced'
}

export function compile(compilationLevel: CompilationLevel, files: File[], outputDirectory: string) {

	const compilationStrategy = new CompilationStrategy();

	return compilationStrategy.compile(compilationLevel, files, outputDirectory);

}
