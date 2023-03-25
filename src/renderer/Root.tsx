import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import icon from '../../assets/icon.svg';
import './Root.css';

// eslint-disable-next-line import/prefer-default-export
export function Root() {
  const [pingCount, setPingCount] = useState(0);

  const callPing = async () => {
    setPingCount(await window.ipc.ipcCalls.invokePing1());
  };

  return (
    <div>
      <div className="Root">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div>
        <Button variant="contained" className="Hello">
          Hello World
        </Button>
      </div>
      <div>
        <Button variant="contained" className="Hello" onClick={callPing}>
          Ping
        </Button>
        <p>pingCount = {pingCount}</p>
      </div>
    </div>
  );
}
