import {FsStreamService} from "../FsStreamService/FsStreamService";

export interface File {
  src: string; //TODO should be called srcFile
  output: string; //TODO should be called outputFile
}

export interface Compilation {
  compile: (files: File[], outputDestination: string, streamService: FsStreamService) => void;
}
