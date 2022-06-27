import axios from "axios";
import * as React from "react";

import "./addQuestion.scss";

const New = () => {
  //   const [file, setFile] = useState("");
  // const [state, setState] = React.useState({
  //   details: "",
  //   tag: "",
  //   type: "",
  //   rank: "",
  //   difficulty: "",
  //   remarks: "",
  //   answer: {},
  //   count: 0,
  //   comments: "",
  //   related_file: "",
  // });

  const [details, setDetails] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [type, setType] = React.useState("");
  const [rank, setRank] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [related_file, setRelatedFile] = React.useState(null);

  const onChangeTag = (event) => {
    console.log(event.target.value);
    setTag(event.target.value);
  };

  const onChangeDetails = (event) => {
    console.log(event.target.value);
    setDetails(event.target.value);
  };

  const onChangeType = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };

  const onChangeRank = (event) => {
    console.log(event.target.value);
    setRank(event.target.value);
  };

  const onChangeDifficulty = (event) => {
    console.log(event.target.value);
    setDifficulty(event.target.value);
  };

  const onChangeRemarks = (event) => {
    console.log(event.target.value);
    setRemarks(event.target.value);
  };

  const onChangeComments = (event) => {
    console.log(event.target.value);
    setComments(event.target.value);
  };

  const onChangeRelatedFile = (event) => {
    console.log(event.target.files[0]);
    setRelatedFile(event.target.files[0]);
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(`http://localhost:4000/question/`, {
        details: details,
        tag: tag,
        type: type,
        rank: rank,
        difficulty: difficulty,
        remarks: remarks,
        comments: comments,
        answer: {},
        count: 0,
        related_file: related_file,
      });

      // if (res.status === 200) {
      // 	history.push(`/question`);
      // }
    } catch (error) {}
  };

  return (
    <div className="new">
      {/* <Sidebar /> */}
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top">
          <h1>Add new question</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div class="formTextarea">
                <label for="exampleFormControlTextarea1">
                  Question details
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="details"
                  onChange={onChangeDetails}
                  value={details}
                ></textarea>
              </div>

              <div className="formInput">
                <label>tag</label>
                <select
                  name="tag"
                  id="tag"
                  className="select"
                  onChange={onChangeTag}
                  value={tag}
                >
                  <option value="react">React</option>
                  <option value="node">Node</option>
                  <option value="express">Express</option>
                  <option value="mongodb">Mongodb</option>
                </select>
              </div>

              <div className="formInput">
                <label>rank</label>
                <select
                  name="rank"
                  id="rank"
                  className="select"
                  onChange={onChangeRank}
                  value={rank}
                >
                  <option value="4C">4C</option>
                  <option value="4A">4A</option>
                  <option value="5C">5C</option>
                  <option value="5A">5A</option>
                </select>
              </div>

              <div className="formInput">
                <label>difficulty</label>
                <select
                  name="difficulty"
                  id="difficulty"
                  className="select"
                  onChange={onChangeDifficulty}
                  value={difficulty}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="formInput">
                <label>type</label>
                <select
                  name="type"
                  id="type"
                  className="select"
                  onChange={onChangeType}
                  value={type}
                >
                  <option value="mcq">MCQ</option>
                  <option value="code_output">Code Output</option>
                  <option value="fill_gaps">Fill in the Gaps</option>
                </select>
              </div>

              <div className="formInput">
                <label>remarks</label>
                <input
                  type="text"
                  placeholder="remarks"
                  name="remarks"
                  onChange={onChangeRemarks}
                  value={remarks}
                />
              </div>

              <div className="formInput">
                <label>comments</label>
                <input
                  type="text"
                  placeholder="comments"
                  name="comments"
                  onChange={onChangeComments}
                  value={comments}
                />
              </div>

              <div className="formInput">
                <label>related file</label>
                <input
                  type="file"
                  placeholder="comments"
                  onChange={onChangeRelatedFile}
                  // value={related_file.name}
                />
              </div>
            </form>
            <button onClick={handleClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
