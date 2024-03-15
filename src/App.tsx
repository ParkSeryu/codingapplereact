import React, { useState } from 'react';
import './App.css';

interface IfModal {
    글제목: string[]
    idx: number
    color: string
    제목변경: any
}

function Modal({
  글제목, idx, color, 제목변경,
}: IfModal) {
  return (
    <div className="modal" style={{ background: color }}>
      <h4>{글제목[idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => {
        const copy = [...글제목]; // 따봉 배열의 복사본을 만듭니다.
        copy[0] = '여자코트 추천'; // 복사본에서 해당 요소를 업데이트합니다.
        제목변경(copy); // 새로운 배열로 상태를 업데이트합니다.
      }}
      >
        글수정
      </button>
    </div>
  );
}

function App() {
  const [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [따봉, 따봉변경] = useState<number[]>([0, 0, 0]);
  const [modal, setModal] = useState(true);
  const [modalIdx, setModalIdx] = useState<number>(0);

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
      {
                글제목.map((a, i) => (
                  <div className="list" key={a + 1}>
                    {/* eslint-disable-next-line max-len */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                    <h4 onClick={() => {
                      setModal(!modal);
                      setModalIdx(i);
                    }}
                    >
                      {글제목[i]}
                      {/* eslint-disable-next-line max-len */}
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
                      <span onClick={() => {
                        const copyOf따봉 = [...따봉]; // 따봉 배열의 복사본을 만듭니다.
                        // eslint-disable-next-line operator-assignment
                        copyOf따봉[i] = copyOf따봉[i] + 1; // 복사본에서 해당 요소를 업데이트합니다.
                        따봉변경(copyOf따봉); // 새로운 배열로 상태를 업데이트합니다.
                      }}
                      >
                        😂
                      </span>
                      {따봉[i]}
                    </h4>
                    <p>2월 17일 발행</p>
                  </div>
                ))
            }

      {
                modal ? <Modal 글제목={글제목} idx={modalIdx} color="skyblue" 제목변경={글제목변경} /> : null
            }

    </div>
  );
}

export default App;
