import React, { useState } from 'react';
import './App.css';

function App() {
  const [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [따봉] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}

          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => {
            글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학']);
          }}
          >
            😊
          </button>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
