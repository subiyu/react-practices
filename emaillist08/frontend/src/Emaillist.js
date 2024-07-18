import React from 'react';
import {Email_List} from './assets/scss/Emaillist.scss';
import EmailItem from './EmailItem';

function Emaillist({emails}) {
    return (
        <ul className={Email_List}>
            {
                emails?.map(email => <EmailItem          // emails가 null이 아닐때만 출력(null이면 실행 안 함)
                                        key={email.no}
                                        no={email.no}
                                        firstName={email.firstName}
                                        lastName={email.lastName}
                                        email={email.email} />) 

            }
        </ul>
    );
}

export default Emaillist;