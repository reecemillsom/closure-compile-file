"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var fs = require('fs');
var FsStreamService = /** @class */ (function () {
    function FsStreamService(inputDestination, outputDestination) {
        this.inputDestination = inputDestination;
        this.outputDestination = outputDestination;
        this.readableStream = fs.createReadStream(inputDestination, {
            flags: 'r',
            encoding: 'utf8',
        });
        this.writableStream = fs.createWriteStream(outputDestination, {
            flags: 'w',
            encoding: 'utf8'
        });
        this.data = [];
    }
    FsStreamService.prototype.readFileContents = function (callback) {
        var _this = this;
        this.readableStream.on('data', function (chunk) {
            _this.data.push(chunk);
        });
        this.readableStream.on('error', function (error) {
            return callback("Error " + error + " occurred when reading file " + _this.inputDestination, []);
        });
        this.readableStream.on('end', function () {
            return callback(null, _this.data);
        });
    };
    FsStreamService.prototype.writeFileContents = function (compiledContents) {
        var _this = this;
        var readableStream = new stream_1.Readable();
        readableStream.push(compiledContents);
        readableStream.push(null); //Indicates that the end of the content being read is here.
        readableStream.on('data', function (chunk) {
            _this.writableStream.write(chunk.toString());
        });
        readableStream.on('end', function () {
            console.log("Finished writing content to location " + _this.outputDestination);
        });
    };
    return FsStreamService;
}());
exports.default = FsStreamService;
