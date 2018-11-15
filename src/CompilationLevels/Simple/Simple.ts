import Compilation from "../Compilation";


export class Simple implements Compilation {

  constructor(){}

  //TODO when using compiler, flags needed at least are compilationLevel, jsOutputFile, JS as array of strings.
  compile(files: string[], outputDestination: string) {}

}
