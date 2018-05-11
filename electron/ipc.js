// to have access to local or global scripts
//require(process.cwd() + "/node_modules/benja").paths();
var exec = require("child_process").exec;

function ipcActions(win, app, ipcMain) {
  ipcMain.on("load", event => {});
}

module.exports = ipcActions;
