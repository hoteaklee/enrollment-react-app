import React, {useState} from "react";
import EnrollmentForm from "./components/EnrollmentForm";
import EnrolList from "./components/EnrolList";

//EnrollmentForm 이라는 폼을 return하도록
// 정의된 App 컴퍼넌트
const App = () => {
    const [program, setProgram] = useState("UG"); //프로그램 종류
    /*const [seats, setSeats] = useState("100"); // 참가가능 인원수*/
    const [ugseats, setUgSeats] = useState(60);
    const [pgseats, setPgSeats] = useState(40);

    // 과정 등록한 학생 정보를 저장하는 변수 선언
    const [studDetails, setStudDetails] = useState({}); //{} 복수라서

    const handleChange = (e) => {
        setProgram(e.target.value);
    };

    // 프로그램별 참가가능 인원수를 변경하는 함수
    const setUpdateSeats= (modifySeat) =>{
        if (program === 'UG')
            setUgSeats(modifySeat);
        else
             setPgSeats(modifySeat);
    };

    return (
        <div className="App">
            <div className="programs">
                <h3 className="title"> 프로그램 참가 등록양식</h3>
                <ul className="ulEnrol">
                    <li onChange={handleChange} className="parentLabels">
                        <input type="radio" value="UG" name="programGroup" defaultChecked />학사과정
                        <input type="radio" value="PG" name="programGroup"/>석사과정
                    </li>
                    <li>
                        {program} 참가 가능 인원:{(program === 'UG')? ugseats :pgseats}
                    </li>
                </ul>
            </div>
        <EnrollmentForm chosenProgram={program}
            currentSeat={(program === 'UG') ? ugseats :pgseats  }
                        setUpdateSeats={setUpdateSeats}
                        setStudDetails={setStudDetails} />
            <EnrolList studDetails={studDetails}  setStudDetails={setStudDetails}/>
        </div>
    );
};

// 컴퍼넌트나 모듈형태로 작성하는 경우
// 기본적으로 내보내기 할 함수명 지정
export default App;