import { Route, Routes } from 'react-router-dom';
import Common from './components/Common';
import Header from './components/Header';
import QuestionDetail from './pages/Questions/QuestionDetail';
import AskQuestion from './pages/Questions/AskQuestion';
import QuestionList from './pages/Questions/QuestionList';
import EditQuestion from './pages/Questions/EditQuestion';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import LogOut from './pages/LogOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<QuestionList />}></Route>
          <Route path="/questions/:id" element={<QuestionDetail />}></Route>
          <Route path="edit/:id" element={<EditQuestion />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
