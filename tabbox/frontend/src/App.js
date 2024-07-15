// import React, {useState} from 'react';
// import TabList from './TabList';
// import './assets/css/App.css';
// import tabs from './assets/json/data';

// function App() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     return (
//         <div id={'App'}>
//             <div className={'tab-box'}>
//                 <TabList selectTab={(no) => {
//                     }}
//                     tabs ={tabs.map((e, i) => {
//                     const {contents, ...rest} = e;
                    
//                     if(i === activeIndex) {
//                         rest.active = true;
//                     }
//                     return rest;
//                 })}/>
//                 {/* rest[activeIndex].active = true;
//                 <TabView contents={tabs[activeIndex].contents} /> */}
//                 <div>탭뷰입니다.</div>
//             </div>
//         </div>
//     );
// }

// export default App;

import React from 'react';
import TabBox from './TabBox';
import './assets/css/App.css';

function App(props) {
    const tabs = [
        {no: 1, name: '메뉴1', active: false, contents: '메뉴1의 뷰 내용'},
        {no: 2, name: '메뉴2', active: false, contents: '메뉴2의 뷰 내용'},
        {no: 3, name: '메뉴3', active: true, contents: '메뉴3의 뷰 내용'},
        {no: 4, name: '메뉴4', active: false, contents: '메뉴4의 뷰 내용'},
        {no: 5, name: '메뉴5', active: false, contents: '메뉴5의 뷰 내용'},
        {no: 6, name: '메뉴6', active: false, contents: '메뉴6의 뷰 내용'}
    ];

    return (
        <div id='App'>
            <TabBox tabs={tabs} />
        </div>
    );
}

export default App;