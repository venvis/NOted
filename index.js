const { app, BrowserWindow , Menu , shell} = require('electron')
require('dotenv').config();
const githubToken = process.env.GITHUB_TOKEN;

let win;


const createWindow = () => {
  win=new BrowserWindow({
   
    width: 1300,
    height: 800,
    webPreferences: {
        nodeIntegration: true
      },
      resizable: false
    
    
  })

  win.loadFile('./html/index.html')
}

const menu=[
    {
        label:'About',
       
    },
    {
        label:'File',
        submenu:[
            {
                label:'About',
                click: async ()=> {
                    await shell.openExternal('https://notedelectronjs.netlify.app/');
                }
            },
            {
                type: "separator"
            },
         
            {
                label: "Quit",
                click: async ()=>{
                    app.quit();
                }
            }

        ]
    }

]
const menuitems=Menu.buildFromTemplate(menu)
Menu.setApplicationMenu(menuitems)



app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })