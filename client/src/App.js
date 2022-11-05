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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<QuestionList />}></Route>
          <Route path="/questions/:id" element={<QuestionDetail />}></Route>
          <Route path="edit/:id" element={<EditQuestion />}></Route>
          {/* Tags, Users, 답변 작성, 수정 페이지 라우팅은 여기 */}
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/login" element={<Login />} />
        {/* 로그인페이지 또는 회원가입페이지 라우팅은 여기 */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
