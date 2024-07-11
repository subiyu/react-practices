import React from 'react';

/*
오류: 
    return (
        <h1>Ex02</h1>
        <p>특징2: Single Root</p>
    );

이유: transpile 에러!
    return (
        React.createElement('h1', null, 'Ex02');
        React.createElement('p', null, '특징2: Single Root');
    );

해결: return (
        <div>
            <h1>Ex02</h1>
            <p>특징2: Single Root</p>
        </div>
    );

    transpile

    return (
        React.createElement(
            'div', 
            null, 
            React.createElement('h1', null, 'Ex02'),
            React.createElement('p', null, '특징2: Single Root')
    )
*/

// function App() {
//     return (
//         <div>
//             <h1>Ex02</h1>
//             <p>특징2: Single Root</p>
//         </div>
//     );
// }

function App() {
    return (
        <>
            <h1>Ex02</h1>
            <p>특징2: Single Root</p>
        </>
    );
}

export {App};