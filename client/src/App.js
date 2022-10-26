import { Route, Routes } from 'react-router-dom';
import Common from './components/Common';
import Header from './components/Header';
import QuestionList from './pages/Questions/QuestionList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<QuestionList />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
