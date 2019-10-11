"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FsService_1 = require("../FsService/FsService");
var FsStreamServiceMock_1 = require("../FsStreamService/FsStreamServiceMock");
var GoogleClosureCompileMock_1 = require("../GoogleClosureCompiler/GoogleClosureCompileMock");
var Compilation_1 = require("./Compilation");
describe("Compilation", function () {
    var closureCompiler;
    var compilation;
    beforeEach(function () {
        closureCompiler = new GoogleClosureCompileMock_1.default();
        compilation = new Compilation_1.Compilation(closureCompiler);
    });
    describe("when asked to initialise", function () {
        it("will assign google compiler", function () {
            expect(compilation.closureCompiler).toEqual(closureCompiler);
        });
    });
    describe("when asked to compile", function () {
        describe("when directory path does not exist", function () {
            it("will create the directory", function () {
                FsService_1.default.doesPathExist = jest.fn().mockReturnValue(false);
                FsService_1.default.createDirectory = jest.fn();
                compilation.compile([{ src: 'some src files', output: 'some output file' }], './output', FsStreamServiceMock_1.default);
                expect(FsService_1.default.createDirectory).toHaveBeenCalledWith('./output');
            });
        });
        describe("when reading file contents errors", function () {
            it("will throw an error", function () {
                expect(function () {
                    compilation.compile([{ src: '../test.js', output: 'some output file' }], './output', FsStreamServiceMock_1.default);
                }).toThrow('Something went wrong');
            });
        });
        describe("when compiler run throws an error", function () {
            it("will throw an error to return to the user", function () {
                FsService_1.default.createDirectory = jest.fn();
                expect(function () {
                    compilation.compile([{ src: '../test1.js', output: 'test.js' }], './output', FsStreamServiceMock_1.default);
                }).toThrow('Exiting with code 1 error: something went wrong');
            });
        });
        describe("when compiler does not throw an error", function () {
            it("will call write file contents with the right data", function () {
                expect(function () {
                    compilation.compile([{
                            src: 'some src files',
                            output: 'some output files'
                        }], './output', FsStreamServiceMock_1.default);
                }).not.toThrow('Exiting with code 1 error: something went wrong');
            });
        });
        it("will call run on google closure compiler", function () {
            closureCompiler.run = jest.fn();
            compilation.compile([{ src: 'some src files', output: 'some output file' }], './output', FsStreamServiceMock_1.default);
            expect(compilation.closureCompiler.run).toHaveBeenCalledWith([{ src: 'ab' }], expect.any(Function));
        });
    });
});
