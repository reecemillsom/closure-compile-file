import {FsStreamService} from "../FsService/FsStreamService";

export interface File {
  src: string;
  output: string;
}

export interface Compilation {
  compile: (files: File[], outputDestination: string, streamService: FsStreamService) => void;
}
