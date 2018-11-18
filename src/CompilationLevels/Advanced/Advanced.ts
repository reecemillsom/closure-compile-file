import {Compilation, File} from "../Compilation";


export class Advanced implements Compilation {

  constructor(){}

  //TODO when using compiler, flags needed at least are compilationLevel, jsOutputFile, JS as array of strings.
  compile(files: File[], outputDestination: string) {}

}
