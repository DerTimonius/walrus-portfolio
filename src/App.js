import './App.css';
import { Drawer } from '@mui/material';
import Animals from './components/Animals';

function App() {
  return (
    <div className="App">
      <p>hello</p>
      <Drawer
        anchor="left"
        open={true}
        variant="persistent"
        // ModalProps={{
        //   keepMounted: true,
        // }}
      >
        <h3>Flying Walrus</h3>

        <p>Animals</p>
        <p>Landscape</p>
        <p>Portrait</p>
        <p>Macro</p>
        <p>Street</p>
        <p>Plants</p>
        <p>Analog</p>
      </Drawer>
      <Animals />
    </div>
  );
}

export default App;
