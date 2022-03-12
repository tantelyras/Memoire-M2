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
var url = require("url");
var throat_1 = require("throat");
var electron_1 = require("electron");
var constant_1 = require("../../utils/constant");
var delay_1 = require("../../utils/delay");
var uuid_1 = require("../../utils/uuid");
var config_1 = require("../../utils/config");
// configure save instance
var config = new config_1.Config(electron_1.app.getPath('userData'));
/**
 * browser window (renderer) pool
 */
var WindowPool = /** @class */ (function () {
    function WindowPool(maxSize, debugMode) {
        var _this = this;
        if (maxSize === void 0) { maxSize = 1; }
        if (debugMode === void 0) { debugMode = false; }
        this.pool = [];
        // create new browser window instance lock flag
        this.locked = false;
        // when debug mode, only 1 window can be work
        this.maxSize = debugMode ? 1 : maxSize;
        this.debugMode = debugMode;
        electron_1.ipcMain.on(constant_1.EventsEnum.WebContentsReady, function () {
            _this.runAllTest();
        });
    }
    /**
     * get a window with thread lock
     */
    WindowPool.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var win;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.locked) return [3 /*break*/, 3];
                        return [4 /*yield*/, delay_1.delay()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.get()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        this.locked = true;
                        return [4 /*yield*/, this.getAsync()];
                    case 4:
                        win = _a.sent();
                        this.locked = false;
                        return [2 /*return*/, win];
                }
            });
        });
    };
    /**
     * get a window from pool, if not exist, create one, if pool is full, wait and retry
     */
    WindowPool.prototype.getAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, win;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = this.pool.find(function (info) { return info.idle; });
                        // exist ide window, return it for usage
                        if (info)
                            return [2 /*return*/, info.win];
                        if (!this.isFull()) return [3 /*break*/, 3];
                        return [4 /*yield*/, delay_1.delay()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getAsync()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.create()];
                    case 4:
                        win = _a.sent();
                        // put it into pool
                        this.pool.push({ win: win, idle: true, tests: [] });
                        return [2 /*return*/, win];
                }
            });
        });
    };
    /**
     * create a valid electron browser window
     */
    WindowPool.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var winOpts = __assign(__assign({}, config.read()), { show: _this.debugMode, focusable: _this.debugMode, webPreferences: {
                                webSecurity: false,
                                nodeIntegration: true,
                            } });
                        var win = new electron_1.BrowserWindow(winOpts);
                        // when window close, save window size locally
                        win.on('close', function () {
                            var _a = win.getBounds(), width = _a.width, height = _a.height;
                            config.write({ width: width, height: height });
                        });
                        // after window closed, remove it from pool for gc
                        win.on('closed', function () {
                            _this.removeWin(win);
                            win = undefined;
                        });
                        var f = url.format({
                            hash: encodeURIComponent(JSON.stringify({ debugMode: _this.debugMode })),
                            pathname: path.join(__dirname, '/index.html'),
                            protocol: 'file:',
                            slashes: true,
                        });
                        win.loadURL(f);
                        if (_this.debugMode) {
                            // when debug mode, open dev tools
                            win.webContents.openDevTools();
                        }
                        win.webContents.on('did-finish-load', function () {
                            // win ready
                            resolve(win);
                        });
                    })];
            });
        });
    };
    /**
     * the proc size of pool
     */
    WindowPool.prototype.size = function () {
        return this.pool.length;
    };
    /**
     * whether the pool is full
     */
    WindowPool.prototype.isFull = function () {
        return this.size() >= this.maxSize;
    };
    /**
     * set the proc idle status
     * @param win
     * @param idle
     */
    WindowPool.prototype.setIdle = function (win, idle) {
        var idx = this.pool.findIndex(function (info) { return info.win === win; });
        this.pool[idx].idle = idle;
    };
    WindowPool.prototype.appendTest = function (win, test) {
        var idx = this.pool.findIndex(function (info) { return info.win === win; });
        this.pool[idx].tests.push(test);
    };
    /**
     * clear all the save tests in memory
     */
    WindowPool.prototype.clearSaveTests = function () {
        this.pool.forEach(function (info) {
            info.tests = [];
            // remove all test result dom
            info.win.webContents.send(constant_1.EventsEnum.ClearTestResults);
        });
    };
    WindowPool.prototype.removeWin = function (win) {
        var idx = this.pool.findIndex(function (info) { return info.win = win; });
        // remove from pool by index
        if (idx !== -1) {
            this.pool.splice(idx, 1);
        }
        win.destroy();
    };
    /**
     * run test case by send it to renderer
     * @param id
     * @param test
     */
    WindowPool.prototype.runTest = function (id, test) {
        return __awaiter(this, void 0, void 0, function () {
            var win, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        win = _a.sent();
                        return [4 /*yield*/, this.run(win, id, test)];
                    case 2:
                        result = _a.sent();
                        this.appendTest(win, test);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    WindowPool.prototype.runAllTest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.pool.map(function (info) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(info.tests.map(throat_1.default(1, function (test) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.run(info.win, uuid_1.uuid(), test)];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); })))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    WindowPool.prototype.run = function (win, id, test) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.setIdle(win, false);
                        // redirect the test result ti proc
                        electron_1.ipcMain.once(id, function (event, result) {
                            // test case running end, set the window with idle status
                            _this.setIdle(win, true);
                            // resolve test result
                            resolve({ result: result, id: id });
                        });
                        // send test case into web contents for running
                        win.webContents.send(constant_1.EventsEnum.StartRunTest, test, id);
                    })];
            });
        });
    };
    return WindowPool;
}());
exports.WindowPool = WindowPool;
