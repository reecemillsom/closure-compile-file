export default interface Compilation {
  compile: (files: string[], outputDestination: string) => any;
}
