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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var CONFIG_FILE = 'jest-electron.json';
var DEFAULT_CONFIG = {
    height: 800,
    width: 1024,
};
/**
 * configure saver class
 */
var Config = /** @class */ (function () {
    function Config(dir) {
        this.dir = dir;
    }
    /**
     * get the configure save file path
     */
    Config.prototype.getConfigPath = function () {
        return path.resolve(this.dir, CONFIG_FILE);
    };
    Config.prototype.readFromFile = function () {
        try {
            return JSON.parse(fs.readFileSync(this.getConfigPath(), 'utf8'));
        }
        catch (e) {
            return DEFAULT_CONFIG;
        }
    };
    /**
     * get the configure of file
     */
    Config.prototype.read = function () {
        if (!this.config) {
            this.config = this.readFromFile();
        }
        return this.config;
    };
    /**
     * write configure into file
     * @param config
     * @param flush
     */
    Config.prototype.write = function (config, flush) {
        if (flush === void 0) { flush = false; }
        this.config = flush ? config : __assign(__assign({}, this.read()), config);
        try {
            fs.writeFileSync(this.getConfigPath(), JSON.stringify(this.config));
        }
        catch (e) { }
    };
    return Config;
}());
exports.Config = Config;
