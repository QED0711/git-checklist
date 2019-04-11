const { app, BrowserWindow } = require('electron');

function createWindow(){
    let window = new BrowserWindow({width: 1920, height: 1080})

    window.loadFile('index.html');
    window.webContents.openDevTools();
}

app.on('ready', createWindow)