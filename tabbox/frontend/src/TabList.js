// import React from 'react';
// import TabItem from './TabItem';
// import data from './assets/json/data';

// function TabList({tabs, selectTab}) {
//     return (
//         <ul>
//             {tabs.map(e => <TabItem key={e.no} name={e.name} active={e.active} selectTab={selectTab} />) }
//         </ul>
//     );
// }

// export default TabList;

import React from 'react';
import TabItem from './TabItem';

function TabList({tabs}) {
    return (
        <ul>
            {tabs.map(e => <TabItem key={e.no} name={e.name} active={e.active} />) }
        </ul>
    );
}

export default TabList;