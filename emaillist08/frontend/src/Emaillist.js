import React from 'react';
import {Email_List} from './assets/scss/Emaillist.scss';
import EmailItem from './EmailItem';

function Emaillist({emails}) {
    return (
        <ul className={Email_List}>
            {emails.map(e => <EmailItem key={e.no} name={e.name} email={e.email} />) }
        </ul>
    );
}

export default Emaillist;