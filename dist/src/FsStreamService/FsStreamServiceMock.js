"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FsStreamServiceMock = /** @class */ (function () {
    function FsStreamServiceMock(inputDestination, outputDestination) {
        this.inputDestination = inputDestination;
        this.outputDestination = outputDestination;
        this.readError = false;
        this.compilationError = false;
        if (inputDestination === '../test.js') {
            this.readError = true;
        }
        else if (inputDestination === '../test1.js') {
            this.compilationError = true;
        }
    }
    FsStreamServiceMock.prototype.readFileContents = function (callback) {
        if (this.readError) {
            return callback('Something went wrong', []);
        }
        if (this.compilationError) {
            return callback(null, ['fail']);
        }
        return callback(null, ['a', 'b']);
    };
    FsStreamServiceMock.prototype.writeFileContents = function () {
    };
    return FsStreamServiceMock;
}());
exports.default = FsStreamServiceMock;
