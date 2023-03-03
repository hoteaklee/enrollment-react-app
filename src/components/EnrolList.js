import React from 'react';
import '../EnrolList.css';
import { DetailsList } from '@fluentui/react/lib/DetailsList';

// 과정 등록 학생 리스트의 컴럼 정의 (이름, 성, 과정, 이메일)
const columns = [
    {
        key: 'fname', name:'First Name',fieldName:'fname',
        minWith: 90, isResizable:false
    },
    {
        key: 'lname', name:'Last Name',fieldName:'lname',
        minWith: 90, isResizable:false
    },
    {
        key: 'program', name:'과정 종류',fieldName:'program',
        minWith: 90, isResizable:false
    },
    {
        key: 'email', name:'이메일',fieldName:'email',
        minWith: 90, isResizable:false
    },
];

// 테스트용 데이터 삽입 - 컬럼 정의시 사용했던 fieldName 으로 값 초기화
let items = [];
for (let i = 1; i <= 5; ++i){
    let data ={key:i, fname:'FirstName' + i, lname:'LastName'+i,
        program:'UG', email:'Email + i'};
    items.push(data);
}

const EnrolList = () => {
    return(
        <div className="enrolList">
            <DetailsList items={items} columns={columns} />
        </div>
    );
};
export default EnrolList;