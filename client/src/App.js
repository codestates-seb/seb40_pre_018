import { Route, Routes } from 'react-router-dom';
import Common from './components/Common';
import Header from './components/Header';
import QuestionDetail from './pages/Questions/QuestionDetail';
import QuestionCreate from './pages/Questions/QuestionCreate';
import QuestionList from './pages/Questions/QuestionList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<QuestionList />}></Route>
          <Route path="/:id" element={<QuestionDetail />}></Route>
          {/* Tags, Users, 답변 작성, 수정 페이지 라우팅은 여기 */}
        </Route>
        <Route path="/questions" element={<QuestionCreate />} />
        {/* 로그인페이지 또는 회원가입페이지 라우팅은 여기 */}
      </Routes>
    </>
  );
}

export default App;
