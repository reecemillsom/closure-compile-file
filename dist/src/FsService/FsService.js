"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var FsService = /** @class */ (function () {
    function FsService() {
    }
    FsService.createDirectory = function (path, options) {
        fs.mkdirSync(path, options);
    };
    FsService.doesPathExist = function (path) {
        return fs.existsSync(path);
    };
    return FsService;
}());
exports.default = FsService;
