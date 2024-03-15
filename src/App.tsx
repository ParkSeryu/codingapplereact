import React, {useState} from 'react';
import './App.css';

function App() {
    const [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
    const [따봉, 따봉변경] = useState<number[]>([0, 0, 0]);
    const [따봉1, 따봉변경1] = useState(0);
    const [따봉2, 따봉변경2] = useState(0);
    const [modal, setModal] = useState(true);

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
                        <h4 onClick={() => {setModal(true)}}>
                            {글제목[i]}
                            <span onClick={() => {
                                const copyOf따봉 = [...따봉]; // 따봉 배열의 복사본을 만듭니다.
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
                modal ? <Modal 글제목={글제목} color={"skyblue"} 제목변경={글제목변경}/> : null
            }

        </div>
    );


}

function Modal(ppp:any) {
    return (
        <div className="modal" style={{background: ppp.color}}>
            <h4>{ppp.글제목[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                const copy = [...ppp.글제목]; // 따봉 배열의 복사본을 만듭니다.
                copy[0] = '여자코트 추천'; // 복사본에서 해당 요소를 업데이트합니다.
                ppp.제목변경(copy); // 새로운 배열로 상태를 업데이트합니다.
            }}>글수정</button>
        </div>
    );
}
export default App;
