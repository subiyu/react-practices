import React from 'react';
import {Email_Item} from './assets/scss/EmailItem.scss';

function EmailItem({firstName, lastName, email}) {
    return (
        <li className={Email_Item}>
            {firstName}{lastName}
            <br/>
            {email}
        </li>
    );
}

export default EmailItem;