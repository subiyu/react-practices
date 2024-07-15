import React from 'react';
import TabList from './TabList';
import TabView from './TabView';

function TabBox({tabs}) {
    return (
        <div className={'tab-box'}>
            <TabList tabs={tabs}/>
            <TabView />
        </div>
    );
}

export default TabBox;