import { Link } from "react-router-dom";
import {useSelector} from "react-redux";


/*
애플리케이션 상태를 변경하기 위해서는 리듀서 함수인 login(), logout()을 호출하거나 변경된 상태를
전달받아야 함 -> 이를 위해서 useSelector()와 useDispatch()를 활용

useSelector()는 컴포넌트 내에서 애플리케이션 상태를 받아서 자신이 원하는 상태 데이터를 선별하는 용도로 상요
예를 들어 로그인 상태가 변경되는 것을 알아야 하는 컴포넌트는 useSelector()를 이용함

useDispatch()는 리듀서를 통해서 만들어진 새로운 애플리케이션 상태를 반영하기 위해서 사용
예를 들어 로그인 페이지에서 로그인이 처리되면 useDispatch()를 이용해서
새로운 애플리케이션 상태를 배포하는 경우에 사용하게 됨
*/
const BasicMenu = () =>{

    const loginState = useSelector(state => state.loginSlice)

    return(
        <nav id='navbar' className="flex bg-blue-300">
            <div className="w-4/5 bg-gray-500">
                <ul className="flex p-4 text-white fond-bold">
                    <li className="pr-6 text-2xl">
                        <Link to={"/"}>Main</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={"/about"}>About</Link>
                    </li>
                    {loginState.email ? //로그인한 사용자만 출력되는 메뉴
                        <>
                            <li className="pr-6 text-2xl">
                                <Link to={"/todo/"}>Todo</Link>
                            </li>
                            <li className="pr-6 text-2xl">
                                <Link to={"/products/"}>Products</Link>
                            </li>
                        </>
                        :<></>
                    }
                </ul>
            </div>
            <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
                {!loginState.email ?
                    <div className="text-white text-sm m-1 rounded">
                        <Link to={'/member/login'}>Login</Link>
                    </div>
                    :
                    <div className="text-white text-sm m-1 rounded">
                        <Link to={'/member/logout'}>Logout</Link>
                    </div>
                }
            </div>
        </nav>
    )
}

export default BasicMenu