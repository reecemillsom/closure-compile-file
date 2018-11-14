export default interface Compilation {
  compile: (files: string | string[], outputDestination: string) => any;
}
