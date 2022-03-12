"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var child_process_1 = require("child_process");
var electron = require("electron");
var constant_1 = require("../../utils/constant");
var uuid_1 = require("../../utils/uuid");
var delay_1 = require("../../utils/delay");
/**
 * electron proc
 */
var Electron = /** @class */ (function () {
    function Electron(debugMode, concurrency) {
        if (debugMode === void 0) { debugMode = false; }
        if (concurrency === void 0) { concurrency = 1; }
        this.onCloseCallback = function () { };
        // thread lock
        this.lock = false;
        this.debugMode = debugMode;
        this.concurrency = concurrency;
    }
    /**
     * get a idle electron with lock
     */
    Electron.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.proc) return [3 /*break*/, 5];
                        if (!this.lock) return [3 /*break*/, 3];
                        return [4 /*yield*/, delay_1.delay()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.get()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        this.lock = true;
                        _a = this;
                        return [4 /*yield*/, this.create()];
                    case 4:
                        _a.proc = _b.sent();
                        // when proc close, kill all electrons
                        this.proc.on('close', function () {
                            _this.kill();
                            _this.onCloseCallback();
                        });
                        this.lock = false;
                        _b.label = 5;
                    case 5: return [2 /*return*/, this.proc];
                }
            });
        });
    };
    /**
     * create an idle electron proc
     */
    Electron.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // electron starter
                        var entry = path.join(__dirname, '../main/index');
                        var args = [entry];
                        var proc = child_process_1.spawn(electron, args, {
                            stdio: ['ipc'],
                            env: __assign(__assign({}, process.env), { DEBUG_MODE: _this.debugMode ? 'true' : '', CONCURRENCY: "" + _this.concurrency })
                        });
                        var listener = function (m) {
                            if (m.type === constant_1.EventsEnum.ProcReady) {
                                proc.removeListener(constant_1.EventsEnum.ProcMessage, listener);
                                resolve(proc);
                            }
                        };
                        // send electron ready signal
                        proc.on(constant_1.EventsEnum.ProcMessage, listener);
                    })];
            });
        });
    };
    /**
     * kill all electron proc
     */
    Electron.prototype.kill = function () {
        if (this.proc) {
            this.proc.kill();
            this.proc = undefined;
        }
    };
    /**
     * run test case
     * @param test
     */
    Electron.prototype.runTest = function (test) {
        var _this = this;
        var id = uuid_1.uuid();
        return new Promise(function (resolve, reject) {
            _this.get().then(function (proc) {
                var listener = function (_a) {
                    var result = _a.result, resultId = _a.id, type = _a.type;
                    if (type === constant_1.EventsEnum.ProcRunTestResult && resultId === id) {
                        proc.removeListener(constant_1.EventsEnum.ProcMessage, listener);
                        // return test result
                        resolve(result);
                    }
                };
                // listen the running result
                proc.on(constant_1.EventsEnum.ProcMessage, listener);
                // send test data into main thread
                proc.send({ type: constant_1.EventsEnum.ProcRunTest, test: test, id: id });
            });
        });
    };
    Electron.prototype.initialWin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get().then(function (proc) {
                var listener = function (_a) {
                    var type = _a.type;
                    if (type === constant_1.EventsEnum.ProcInitialWinEnd) {
                        proc.removeListener(constant_1.EventsEnum.ProcMessage, listener);
                        resolve();
                    }
                };
                proc.on(constant_1.EventsEnum.ProcMessage, listener);
                proc.send({ type: constant_1.EventsEnum.ProcInitialWin });
            });
        });
    };
    /**
     * when all close, do callback
     * @param cb
     */
    Electron.prototype.onClose = function (cb) {
        this.onCloseCallback = cb;
    };
    return Electron;
}());
exports.Electron = Electron;
exports.electronProc = new Electron();
