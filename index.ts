import {File} from "./src/CompilationLevels/Compilation";
import CompilationStrategy from "./src/CompilationStrategy/CompilationStrategy";


export function compile(compilationLevel: string, files: File[], outputDestination: string) {

	const compilationStrategy = new CompilationStrategy();

	return compilationStrategy.compile(compilationLevel, files, outputDestination);

}
