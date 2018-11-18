"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GoogleClosureCompileMock = /** @class */ (function () {
    function GoogleClosureCompileMock() {
    }
    GoogleClosureCompileMock.prototype.run = function (contents, callback) {
        if (contents[0].src.includes('fail')) {
            return callback(1, undefined, 'something went wrong');
        }
        return callback(0, [{ src: 'we have some content' }], undefined);
    };
    return GoogleClosureCompileMock;
}());
exports.default = GoogleClosureCompileMock;
