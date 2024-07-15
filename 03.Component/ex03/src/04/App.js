import React, {useRef} from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
    const imgRef = useRef(null);

    const onkeyPressInput = (e) => {    //키 값을 알고싶을 때
        if(e.key === 'Enter') {
            console.log("keypress: " + e.target.value);
        }
    };

    const onChangeInput = (e) => {      //변화를 알고싶을 때     
        console.log("changed: " + e.target.value);
    };

    const onFocusInput = (e) => {          
        console.log("focus");
    };

    const onBlurInput = (e) => {          
        console.log("blur");
    };

    const onMouseOverImg = (e) => {          
        console.log("mouseover", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onMouseMoveImg = (e) => {       
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;   
        console.log("mousemove", `x=${e.clientX - offsetLeft}, y=${e.clientY - offsetTop}`);
    };

    const onMouseOutImg = (e) => {          
        console.log("mouseout", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onMouseDownImg = (e) => {          
        console.log("mousedown", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onMouseUpImg = (e) => {          
        console.log("mouseup", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onClickImg = (e) => {          
        console.log("click", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onDoubleClickImg = (e) => {          
        console.log("dbclick", `x=${e.clientX}, y=${e.clientY}`);
    };

    return (
        <>
            <h2>Event Handler  예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요' 
                onKeyPress={onkeyPressInput}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput} />
                <br/>
                <br/>
            <img
                ref={imgRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={logo} 
                onMouseOver={onMouseOverImg} 
                onMouseMove={onMouseMoveImg} 
                onMouseOut={onMouseOutImg} 
                onMouseDown={onMouseDownImg}
                onMouseUp={onMouseUpImg}
                onClick={onClickImg}
                onDoubleClick={onDoubleClickImg} />
        </>
    );
}