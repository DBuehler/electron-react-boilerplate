import { ElectronHandler, IpcCalls } from 'main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    ipc: IpcCalls;
  }
}

export {};
