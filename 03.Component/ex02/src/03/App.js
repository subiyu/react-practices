import React from 'react';
import {Header} from './assets/css/App.css';
import Banner01 from './assets/css/Banner01.css';
import Banner02 from './assets/css/Banner02.css';
import 

//App.css를 모듈로 처리하게 됨(안의 내용을 변수로 받아서 사용하겠다-id, className 을 이용해 선택적으로 가져와서 사용)
function App() {
    return (
        <div id={'App'}>
            <h1 className={'Header'}>CSS Module I</h1>
            <Banner01 />
            <Banner02 />
        </div>
    );
}

export default App;