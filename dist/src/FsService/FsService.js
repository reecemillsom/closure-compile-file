"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var FsService = /** @class */ (function () {
    function FsService() {
    }
    FsService.createDirectory = function (path, options) {
        fs.mkdirSync(path, options);
    };
    FsService.readFileContents = function (filePath, options) {
        var contents;
        try {
            contents = fs.readFileSync(filePath, options);
        }
        catch (error) {
            return error;
        }
        return contents;
    };
    FsService.writeFileContents = function (filePath, data, options) {
        fs.writeFileSync(filePath, data, options);
    };
    return FsService;
}());
exports.FsService = FsService;
