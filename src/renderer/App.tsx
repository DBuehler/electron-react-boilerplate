import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import Button from '@mui/material/Button';
// import icon from '../../assets/icon.svg';
import './App.css';
import { Root } from './Root';

// function Hello() {
//   return (
//     <div>
//       <div className="Hello">
//         <img width="200" alt="icon" src={icon} />
//       </div>
//       <h1>electron-react-boilerplate</h1>
//       <div>
//         <Button variant="contained" className="Hello">
//           Hello World
//         </Button>
//       </div>
//     </div>
//   );
// }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </Router>
  );
}
