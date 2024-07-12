import React from 'react';
import './assets/css/App.css';


//css-module이 false면 App.css의 태그 이름을 그대로 쓸 수 있다.
function App() {
    return (
        <div id={'App'}>
            <h1 className={'Header'}>Normal CSS</h1>
        </div>
    );
}

export default App;