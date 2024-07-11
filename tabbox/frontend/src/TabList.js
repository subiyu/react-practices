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