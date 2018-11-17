"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdvancedMock_1 = require("../CompilationLevels/Advanced/AdvancedMock");
var SimpleMock_1 = require("../CompilationLevels/Simple/SimpleMock");
var WhitespaceMock_1 = require("../CompilationLevels/Whitespace/WhitespaceMock");
var GoogleClosureCompileMock_1 = require("../GoogleClosureCompiler/GoogleClosureCompileMock");
var CompilationStrategy_1 = require("./CompilationStrategy");
describe("CompilationStrategy", function () {
    var compilationStrategy;
    beforeAll(function () {
        compilationStrategy = new CompilationStrategy_1.default();
        compilationStrategy.compilationLevels = {
            whitespace: new WhitespaceMock_1.default(GoogleClosureCompileMock_1.default),
            simple: new SimpleMock_1.default(GoogleClosureCompileMock_1.default),
            advanced: new AdvancedMock_1.default(GoogleClosureCompileMock_1.default)
        };
        compilationStrategy.compilationLevels.whitespace.compile = jest.fn();
        compilationStrategy.compilationLevels.simple.compile = jest.fn();
        compilationStrategy.compilationLevels.advanced.compile = jest.fn();
    });
    describe("when asked to compile advanced", function () {
        it("will call compile on the advanced class", function () {
            compilationStrategy.compile('advanced', ['file.jpg'], './test');
            expect(compilationStrategy.compilationLevels.advanced.compile).toBeCalledTimes(1);
            expect(compilationStrategy.compilationLevels.advanced.compile).toHaveBeenCalledWith(['file.jpg'], './test');
        });
    });
    describe("when asked to compile simple", function () {
        it("will call compile on the simple class", function () {
            compilationStrategy.compile('simple', ['file.jpg'], './test');
            expect(compilationStrategy.compilationLevels.simple.compile).toBeCalledTimes(1);
            expect(compilationStrategy.compilationLevels.simple.compile).toHaveBeenCalledWith(['file.jpg'], './test');
        });
    });
    describe("when asked to compile whitespace", function () {
        it("will call compile on the whitespace class", function () {
            compilationStrategy.compile('whitespace', ['file.jpg'], './test');
            expect(compilationStrategy.compilationLevels.whitespace.compile).toBeCalledTimes(1);
            expect(compilationStrategy.compilationLevels.whitespace.compile).toHaveBeenCalledWith(['file.jpg'], './test');
        });
    });
});
