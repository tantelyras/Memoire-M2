const electron = require("electron");
const { app, BrowserWindow } = electron;

app.on("ready", () => {
  let win = new BrowserWindow({ show: false });
  win.maximize();
  win.show();
  win.loadURL(`file://${__dirname}/index.html`);
});
