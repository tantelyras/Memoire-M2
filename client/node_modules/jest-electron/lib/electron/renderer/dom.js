"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * show test result with page dom
 */
var TS = [];
/**
 * add one test suit result
 * @param r
 */
function addResult(r) {
    try {
        TS.push(r);
        appendTestResultDOM(r);
        updateStatThrottle();
    }
    catch (e) {
        console.warn(e);
    }
}
exports.addResult = addResult;
/**
 * clear all test result
 */
function clearResult() {
    TS = [];
    clearTestResultsDOM();
    updateStat();
}
exports.clearResult = clearResult;
function throttle(fn, delay) {
    if (delay === void 0) { delay = 500; }
    var timer = null;
    return function () {
        // no timer, run one
        if (!timer) {
            setTimeout(function () {
                clearTimeout(timer);
                timer = null;
                fn();
            }, delay);
        }
    };
}
function getStat() {
    return {
        pass: TS.reduce(function (r, curr) { return r + curr.numPassingTests; }, 0),
        fail: TS.reduce(function (r, curr) { return r + curr.numFailingTests; }, 0),
        time: TS.reduce(function (r, curr) { return r + (curr.perfStats.end - curr.perfStats.start); }, 0),
    };
}
function getRatio(pass, fail) {
    var total = pass + fail;
    return total === 0 ? '0%' : (pass / total * 100).toFixed(2) + '%';
}
function getTime(ms) {
    return (ms / 1000).toFixed(1) + 's';
}
function updateStat() {
    // dom object
    var $passCount = document.querySelector('#__jest-electron-test-results-stat__ .test-result-pass .stat-indicator');
    var $failCount = document.querySelector('#__jest-electron-test-results-stat__ .test-result-fail .stat-indicator');
    var $timeCount = document.querySelector('#__jest-electron-test-results-stat__ .test-result-time .stat-indicator');
    var $ratioCount = document.querySelector('#__jest-electron-test-results-stat__ .test-result-ratio .stat-indicator');
    var stat = getStat();
    $passCount.innerHTML = "" + stat.pass;
    $failCount.innerHTML = "" + stat.fail;
    $timeCount.innerHTML = "" + getTime(stat.time);
    $ratioCount.innerHTML = "" + getRatio(stat.pass, stat.fail);
}
var updateStatThrottle = throttle(updateStat);
function clearTestResultsDOM() {
    var $testResults = document.querySelector('#__jest-electron-test-results-list__');
    $testResults.innerHTML = '';
}
function getTitle(r) {
    var tr = r.testResults[0];
    return tr ? tr.ancestorTitles[0] : '';
}
function appendTestResultDOM(r) {
    var $testResults = document.querySelector('#__jest-electron-test-results-list__');
    var title = getTitle(r);
    if (!title)
        return;
    var ts = r.testResults.map(function (tr) {
        var title = tr.title, status = tr.status, duration = tr.duration, failureMessages = tr.failureMessages;
        var code = Array.isArray(failureMessages) ? failureMessages[0] : '';
        return "<div class=\"test-result-block\">\n      <div class=\"test-result-info " + status + "\">\n        <div class=\"test-result-title\">" + title + "</div>\n        <div class=\"test-result-time\">" + duration + "ms</div>\n      </div>\n      <div class=\"test-result-code\">\n        <pre><code>" + code + "</code></pre>\n      </div>\n    </div>";
    });
    var html = "<div class=\"test-result-suit\">\n    <div class=\"test-result-suit-title\" title=\"" + r.testFilePath + "\">" + title + "</div>\n    <div class=\"test-result-suit-results\">\n      " + ts.join('') + "\n    </div>\n  </div>";
    $testResults.innerHTML = $testResults.innerHTML + html;
}
function bindFailureMessageClickEvent() {
    document.addEventListener('click', function (e) {
        try {
            // @ts-ignore
            var node = e.target.parentNode;
            if (node.matches('.test-result-info.failed')) {
                // failure
                var codeClassList = node.parentNode.querySelector('.test-result-code').classList;
                // toggle
                codeClassList.contains('show') ? codeClassList.remove('show') : codeClassList.add('show');
            }
        }
        catch (e) {
            console.warn(e);
        }
    });
}
exports.bindFailureMessageClickEvent = bindFailureMessageClickEvent;
