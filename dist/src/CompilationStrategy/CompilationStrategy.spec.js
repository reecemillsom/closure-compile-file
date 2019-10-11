"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
var FsStreamService_1 = require("../FsStreamService/FsStreamService");
var CompilationStrategy_1 = require("./CompilationStrategy");
describe("CompilationStrategy", function () {
    var compilationStrategy;
    beforeAll(function () {
        compilationStrategy = new CompilationStrategy_1.default();
        compilationStrategy.compilationLevels = {
            simple: jest.fn(),
            advanced: jest.fn(),
            whitespace: jest.fn()
        };
    });
    describe("when asked to compile advanced", function () {
        it("will call compile on the advanced class", function () {
            compilationStrategy.compile(index_1.CompilationLevel.Advanced, [{
                    src: 'some src files',
                    output: 'some output file'
                }], './test');
            expect(compilationStrategy.compilationLevels.advanced).toBeCalledTimes(1);
            expect(compilationStrategy.compilationLevels.advanced)
                .toHaveBeenCalledWith([{ src: 'some src files', output: 'some output file' }], './test', FsStreamService_1.default);
        });
    });
    describe("when asked to compile simple", function () {
        it("will call compile on the simple class", function () {
            compilationStrategy.compile(index_1.CompilationLevel.Simple, [{
                    src: 'some src files',
                    output: 'some output file'
                }], './test');
            expect(compilationStrategy.compilationLevels.simple).toBeCalledTimes(1);
            expect(compilationStrategy.compilationLevels.simple)
                .toHaveBeenCalledWith([{ src: 'some src files', output: 'some output file' }], './test', FsStreamService_1.default);
        });
    });
    describe("when asked to compile whitespace", function () {
        it("will call compile on the whitespace class", function () {
            compilationStrategy.compile(index_1.CompilationLevel.Whitespace, [{
                    src: 'some src files', output: 'some output file'
                }], './test');
            expect(compilationStrategy.compilationLevels.whitespace).toBeCalledTimes(1);
            expect(compilationStrategy.compilationLevels.whitespace)
                .toHaveBeenCalledWith([{ src: 'some src files', output: 'some output file' }], './test', FsStreamService_1.default);
        });
    });
});
