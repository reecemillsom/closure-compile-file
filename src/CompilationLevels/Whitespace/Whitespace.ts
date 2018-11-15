import Compilation from "../Compilation";


export class Whitespace implements Compilation {

  constructor(){}

  //TODO when using compiler, flags needed at least are compilationLevel, jsOutputFile, JS as array of strings.
  compile(files: string[], outputDestination: string) {}

}
