import React, { useState } from 'react';
import './App.css';

function App() {
  const [글제목A] = useState('남자 코트 추천');
  const [글제목B] = useState('강남 우동맛집');
  const [글제목C] = useState('파이썬독학');
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{글제목A}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목B}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목C}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
