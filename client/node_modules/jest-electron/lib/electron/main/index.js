"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var constant_1 = require("../../utils/constant");
var window_pool_1 = require("./window-pool");
var debugMode = !!process.env.DEBUG_MODE;
var concurrency = Number(process.env.CONCURRENCY);
// all browser window closed, then kill the while application
electron_1.app.on('window-all-closed', function () {
    electron_1.app.quit();
});
electron_1.app.on('ready', function () {
    // create a window pool instance
    var windowPool = new window_pool_1.WindowPool(concurrency, debugMode);
    // redirect the test cases data, and redirect test result after running in electron
    process.on(constant_1.EventsEnum.ProcMessage, function (_a) {
        var test = _a.test, id = _a.id, type = _a.type;
        if (type === constant_1.EventsEnum.ProcRunTest) {
            // send test data into render proc for running
            windowPool.runTest(id, test).then(function (_a) {
                var result = _a.result, id = _a.id;
                process.send({ result: result, id: id, type: constant_1.EventsEnum.ProcRunTestResult });
            });
        }
        else if (constant_1.EventsEnum.ProcInitialWin) {
            windowPool.clearSaveTests();
            process.send({ type: constant_1.EventsEnum.ProcInitialWinEnd });
        }
        else {
            console.error('Invalid message type', type);
        }
    });
    // electron proc ready
    process.send({ type: constant_1.EventsEnum.ProcReady });
});
