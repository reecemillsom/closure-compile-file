"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FsService_1 = require("../../FsService/FsService");
var GoogleClosureCompileMock_1 = require("../../GoogleClosureCompiler/GoogleClosureCompileMock");
var Simple_1 = require("./Simple");
describe("Simple", function () {
    var closureCompiler;
    var simple;
    beforeEach(function () {
        closureCompiler = new GoogleClosureCompileMock_1.default();
        simple = new Simple_1.Simple(closureCompiler);
    });
    describe("when asked to initialise", function () {
        it("will assign google compiler", function () {
            expect(simple.closureCompiler).toEqual(closureCompiler);
        });
    });
    describe("when asked to compile", function () {
        describe("when directory path does not exist", function () {
            it("will create the directory", function () {
                FsService_1.FsService.readFileContents = jest.fn().mockReturnValue('some content');
                FsService_1.FsService.doesPathExist = jest.fn().mockReturnValue(false);
                FsService_1.FsService.writeFileContents = jest.fn();
                FsService_1.FsService.createDirectory = jest.fn();
                simple.compile([{ src: 'some src files', output: 'some output file' }], './output');
                expect(FsService_1.FsService.createDirectory).toHaveBeenCalledWith('./output');
            });
        });
        describe("when compiler run throws an error", function () {
            it("will throw an error to return to the user", function () {
                FsService_1.FsService.readFileContents = jest.fn().mockReturnValue('fail');
                FsService_1.FsService.createDirectory = jest.fn();
                expect(function () {
                    simple.compile([{ src: 'some src files', output: 'some output files' }], './output');
                }).toThrow('Exiting with code 1 error: something went wrong');
            });
        });
        describe("when compiler does not throw an error", function () {
            describe("when output file already exists", function () {
                it("will call write file contents with the write data", function () {
                    FsService_1.FsService.readFileContents = jest.fn().mockReturnValue('some content');
                    FsService_1.FsService.doesPathExist = jest.fn()
                        .mockImplementationOnce(function () { return false; })
                        .mockImplementationOnce(function () { return true; });
                    FsService_1.FsService.writeFileContents = jest.fn();
                    simple.compile([{ src: 'some src files', output: 'some output files' }], './output');
                    expect(FsService_1.FsService.writeFileContents).toHaveBeenCalledWith('./output/some output files', 'we have some content', {
                        encoding: 'utf8',
                        flag: 'a'
                    });
                });
            });
            describe("when output file does not exist", function () {
                it("will call write file contents with the write data", function () {
                    FsService_1.FsService.readFileContents = jest.fn().mockReturnValue('some content');
                    FsService_1.FsService.doesPathExist = jest.fn()
                        .mockImplementationOnce(function () { return false; })
                        .mockImplementationOnce(function () { return false; });
                    FsService_1.FsService.writeFileContents = jest.fn();
                    simple.compile([{ src: 'some src files', output: 'some output files' }], './output');
                    expect(FsService_1.FsService.writeFileContents).toHaveBeenCalledWith('./output/some output files', 'we have some content', {
                        encoding: 'utf8',
                        flag: 'w'
                    });
                });
            });
        });
        it("will call run on google closure compiler", function () {
            FsService_1.FsService.readFileContents = jest.fn().mockReturnValue('some content');
            FsService_1.FsService.writeFileContents = jest.fn();
            closureCompiler.run = jest.fn();
            simple.compile([{ src: 'some src files', output: 'some output file' }], './output');
            expect(simple.closureCompiler.run).toHaveBeenCalledWith([{ src: 'some content' }], expect.any(Function));
        });
    });
});
