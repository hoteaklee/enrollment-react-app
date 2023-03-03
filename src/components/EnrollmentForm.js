import React from 'react';
import { useState } from 'react';
import '../App.css';

const EnrollmentForm = (props) => {
    // 폼에 입력한 이름/성을 기억히기 위해서 state형 변수 선언
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // state형 변수에 저장된 이름/성을 환영메세지로 출력하기 위해 선언
    const [welcomeMessage, setWelcomeMessage] = useState("");

    // 등록하기 버튼 클릭시 이름/성을 환영메세지로 만들어
    // 폼 아래쪽에 나타냄
    const handleSubmit = (e) => {
        setWelcomeMessage(`환영합니다. ${firstName} ${lastName}`);
        // props로 전달받은 함수 setUpdateSeats 를  이용해서
        // 상위 컴퍼넌트의  seats 변수를 조작함
        props.setUpdateSeats( props.currentSeat - 1 ); // 참여가능 인원수 감수
        e.preventDefault();  //submit 기능 전파 중지
    };
    return(
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}>
        <h1> {props.chosenProgram} 대학생 등록 양식</h1>
                <div><label>First Name</label>
                    {/* onblur 이벤트 발생시 입력한  이름/성은
                    firstName, ladtName변수에 저장 */}
                <input type="text" name="fname"
                onBlur={(e)=>setFirstName(e.target.value)}/></div>

                <div><label>Last Name</label>
                    <input type="text" name="lname"
                    onBlur={(e)=>setLastName(e.target.value)}/></div>
                <div><button type="submit">등록하기</button></div>
            </form>

            <label id="studentMsg" className="message">
                {welcomeMessage}
            </label>
        </div>
    );
};

export default EnrollmentForm;