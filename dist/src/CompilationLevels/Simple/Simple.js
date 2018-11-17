"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FsService_1 = require("../../FsService/FsService");
var Simple = /** @class */ (function () {
    function Simple(GoogleClosureCompiler) {
        this.GoogleClosureCompiler = GoogleClosureCompiler;
        this.googleClosureCompiler = GoogleClosureCompiler;
    }
    //TODO when using compiler, flags needed at least are compilationLevel, jsOutputFile, JS as array of strings.
    //TODO change any array to string array
    Simple.prototype.compile = function (files, outputDestination) {
        this.initialiseGoogleCompiler(files, outputDestination);
        console.log('closureCompiler>', this.googleClosureCompiler);
        //TODO check this is correct. Probably have to run through all contents in the array reading the path and outputting
        //TODO the data.
        var contents = FsService_1.FsService.readFileContents(files[0].src);
        FsService_1.FsService.createDirectory('./test');
        console.log('contents>', contents);
        this.googleClosureCompiler.run([{
                src: contents
            }], function (exitCode, output, error) {
            console.log('exitCode>', exitCode);
            console.log('output>', output);
            console.log('error>', error);
        });
        // this.googleClosureCompiler.run([{
        //   path: files[0].path,
        //   src: files[0].src,
        // }],(exitCode: string, output: string, error: string) => {
        //   console.log('exitCode>', exitCode);
        //   console.log('output>', output);
        //   console.log('error>', error);
        // });
    };
    Simple.prototype.initialiseGoogleCompiler = function (files, outputDestination) {
        this.googleClosureCompiler = new this.googleClosureCompiler({
            compilation_level: "SIMPLE",
            js_output_file: outputDestination,
        });
    };
    return Simple;
}());
exports.default = Simple;
