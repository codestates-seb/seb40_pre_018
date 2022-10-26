import { Route, Routes } from 'react-router-dom';
import Common from './components/Common';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Common />}></Route>
      </Routes>
    </>
  );
}

export default App;
