import React from 'react';
import TabItem from './TabItem';
import {Tab_List} from './assets/scss/TabList.scss';

function TabList({tabs, selectTab}) {
    return (
        <ul className={Tab_List}>
            {tabs.map(t => <TabItem key={t.no} no={t.no} name={t.name} active={t.active} selectTab={selectTab} />)}
        </ul>
    );
}

export default TabList;