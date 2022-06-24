import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import QuestionList from "./pages/question/List";
import List from "./pages/questionSet/List";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="questions">
              <Route index element={<QuestionList />} />
              <Route path=":questionId" element={<Single />} />
              <Route
                path="new"
                element={<New />}
              />
            </Route>
            <Route path="question-sets">
              <Route index element={<List />} />
              <Route path=":questionSetId" element={<Single />} />
              <Route
                path="new"
                element={<New />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
