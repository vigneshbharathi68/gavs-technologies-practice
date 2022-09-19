import './App.css';
import Navbar from './components/Navbar'
import UseState from './UseState/StateTutorial';
import UseReduce from './UseReducer/ReducerTutorial'
import UseEffect from './UseEffect/EffectTutorial';
import UseRef from './UseRef/RefTutorial';
import UseLayoutEffect from './UseLayoutEffect/LayoutEffectTutorial';
import UseImperativeHandle from './UseImperativeHandle/ImperativeHandle'
import UseContext from './UseContext/ContextTutorial';
import UseMemo from './UseMemo/MemoTutorial';
import UseCallback from './UseCallback/CallbackTutorial';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-reduce" element={<UseReduce />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-layout-effect" element={<UseLayoutEffect />} />
          <Route path="/use-imperative-handle" element={<UseImperativeHandle />} />
          <Route path="/use-context" element={<UseContext />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallback />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
