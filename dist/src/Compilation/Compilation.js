"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FsService_1 = require("../FsService/FsService");
var Compilation = /** @class */ (function () {
    function Compilation(googleClosureCompiler) {
        this.googleClosureCompiler = googleClosureCompiler;
        this.closureCompiler = googleClosureCompiler;
    }
    Compilation.prototype.compile = function (files, outputDestination, StreamService) {
        var _this = this;
        if (!FsService_1.default.doesPathExist(outputDestination)) {
            FsService_1.default.createDirectory(outputDestination);
        }
        files.forEach(function (file) {
            var streamService = new StreamService(file.src, outputDestination + "/" + file.output);
            streamService.readFileContents(function (error, data) {
                if (error) {
                    throw new Error(error);
                }
                _this.closureCompiler.run([{
                        src: data.join(''),
                    }], _this.handleOutput.bind(_this, streamService));
            });
        });
    };
    Compilation.prototype.handleOutput = function (streamService, exitCode, output, error) {
        if (error) {
            throw new Error("Exiting with code " + exitCode + " error: " + error);
        }
        streamService.writeFileContents(output[0].src);
    };
    ;
    return Compilation;
}());
exports.Compilation = Compilation;
