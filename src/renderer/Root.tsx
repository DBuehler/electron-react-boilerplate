import Button from '@mui/material/Button';
import icon from '../../assets/icon.svg';
import './App.css';

// eslint-disable-next-line import/prefer-default-export
export function Root() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div>
        <Button variant="contained" className="Hello">
          Hello World
        </Button>
      </div>
    </div>
  );
}
