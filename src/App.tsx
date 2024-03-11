import React, { useState } from 'react';
import './App.css';

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function App() {
  const [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [따봉] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>
      <button
        type="button"
        onClick={() => {
          const sort = [...글제목].sort();
          글제목변경(sort);
        }}
      >
        가나다순정렬
      </button>
      <button
        type="button"
        onClick={() => {
          const copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
        변경
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          😹
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
      <Modal />
    </div>
  );
}

export default App;
