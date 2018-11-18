"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FsService_1 = require("../../FsService/FsService");
var Simple = /** @class */ (function () {
    function Simple(googleClosureCompiler) {
        this.googleClosureCompiler = googleClosureCompiler;
        this.closureCompiler = googleClosureCompiler;
    }
    Simple.prototype.compile = function (files, outputDestination) {
        var _this = this;
        files.forEach(function (file) {
            var contents = FsService_1.FsService.readFileContents(file.src, {
                encoding: 'utf8',
                flag: 'r'
            });
            if (!FsService_1.FsService.doesPathExist(outputDestination)) {
                FsService_1.FsService.createDirectory(outputDestination);
            }
            _this.closureCompiler.run([{
                    src: contents
                }], _this.handleOutput.bind(_this, file, outputDestination));
        });
    };
    Simple.prototype.handleOutput = function (file, outputDestination, exitCode, output, error) {
        if (error) {
            throw new Error("Exiting with code " + exitCode + " error: " + error);
        }
        if (FsService_1.FsService.doesPathExist(outputDestination + "/" + file.output)) {
            return FsService_1.FsService.writeFileContents(outputDestination + "/" + file.output, output[0].src, {
                encoding: 'utf8',
                flag: 'a',
            });
        }
        FsService_1.FsService.writeFileContents(outputDestination + "/" + file.output, output[0].src, {
            encoding: 'utf8',
            flag: 'w',
        });
    };
    ;
    return Simple;
}());
exports.Simple = Simple;
