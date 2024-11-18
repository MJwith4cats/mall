import react from 'react';
import {Link} from "react-router-dom"
import BasicLayout from '../layouts/BasicLayout';

function MainPage(props){
    return(
        <BasicLayout>
        <div className={'text-3xl'}>Main Page</div>
        </BasicLayout>
    )
}
export default MainPage;

//react는 a태그 쓰면 안되고 링크로 이동해야함
//경로가 바뀔 때마다 실행하면 리액트를 새로 실행하게 되는 거니까
//이것을 피하기 위해서 링크 컴포넌트를 사용함