import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    // 자바스크립트의 표현식만 블락안에 들어갈 수 있고, ()안에는 아예 들어갈 수 없다.
    return (
        <div>
            <Header />
            <Contents />
        </div>
    );
}

export {App};