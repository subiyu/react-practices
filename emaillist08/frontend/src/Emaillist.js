import React from 'react';
import {Email_List} from './assets/scss/Emaillist.scss';
import EmailItem from './EmailItem';

function Emaillist({emails}) {
    return (
        <ul className={Email_List}>
            {emails.map(email => <EmailItem key={email.no}
                                        firstName={email.firstName}
                                        lastName={email.lastName}
                                        email={email.email} />) 
            }
        </ul>
    );
}

export default Emaillist;