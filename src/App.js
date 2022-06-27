import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuestion from "./pages/addQuestion/addQuestion";
import Home from "./pages/home/Home";
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
                path="add"
                element={<AddQuestion />}
              />
            </Route>
            <Route path="question-sets">
              <Route index element={<List />} />
              <Route path=":questionSetId" element={<Single />} />
              <Route
                path="add"
                element={<AddQuestion />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
