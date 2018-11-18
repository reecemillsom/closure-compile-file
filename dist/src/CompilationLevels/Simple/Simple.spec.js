"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GoogleClosureCompileMock_1 = require("../../GoogleClosureCompiler/GoogleClosureCompileMock");
var Simple_1 = require("./Simple");
describe("Simple", function () {
    var ClosureCompiler;
    var simple;
    beforeAll(function () {
        ClosureCompiler = GoogleClosureCompileMock_1.default;
        simple = new Simple_1.Simple(ClosureCompiler);
    });
    describe("when asked to initialise", function () {
        it("will assign google compiler", function () {
            expect(simple.googleClosureCompiler).toEqual(GoogleClosureCompileMock_1.default);
        });
    });
    describe("when asked to compile", function () {
        it("will initialise the google compiler", function () {
            simple.compile([{ src: 'some src files', output: 'some output file' }], "./output");
            expect(simple.googleClosureCompiler).toBeInstanceOf(GoogleClosureCompileMock_1.default);
        });
    });
});
