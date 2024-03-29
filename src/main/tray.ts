import { Menu, Tray, app, nativeImage, BrowserWindow } from "electron";
import path from "node:path";

export function createTray(window: BrowserWindow) {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, "rotionTemplate.png")
  );

  const tray = new Tray(icon);

  const menu = Menu.buildFromTemplate([
    { label: "Rotion", enabled: false },
    { type: "separator" },
    {
      label: "Novo documento",
      accelerator: "CommandOrControl+n",
      click: () => {
        window.webContents.send("new-document");
      },
    },
    { type: "separator" },
    { label: "Sair", role: "quit" },
  ]);

  tray.setContextMenu(menu);
}
