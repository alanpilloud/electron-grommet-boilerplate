const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const exec = require("child_process").exec;

// in case by default WebGL doesn't work ... (rpi or others)
//app.commandLine.appendSwitch("--ignore-gpu-blacklist");

// a reference is needed so the GC
// won't kill the view
global.win;

// once the app is ready
app.once("ready", () => {
  // if you need fullscreen, uncomment the following line, then use area.width
  // and area.height in the BrowserWindow options
  //const area = electron.screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    backgroundColor: "#ffffff",
    //frame: false,
    // in some case kiosk: true is not working
    // same goes for fullscreen but this is working
    //fullscreen: true,
    x: 0,
    y: 0,
    width: 1000,
    height: 600
  });

  win.once("closed", () => {
    win = null; // cleanup the reference
  });

  if (process.env.NODE_ENV == "development") {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadURL("file://" + __dirname + "/../build/index.html");
  }

  const ipcActions = require("./ipc.js");

  // load IPC actions
  ipcActions(win, app, ipcMain);
});
