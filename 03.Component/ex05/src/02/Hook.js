import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [text, setText] = useState('');

    /**
     *  Alternative 01: getDrivedStateFromProps 
     *  => 프로퍼티로 상태를 변경해야할 때
     */
    if(color !== backgroundColor) {
        setBackgroundColor(color);
    }

    /**
     * After Rendering
     * class component(componentDidUpdate, componentDidMount)
     */
    //class component(componentDidUpdate, componentDidMount)
    useEffect(() => {
        console.log('After Rendering: update text or update backgroundColor');
    });

    /**
     *  After Rendering
     *  class component(componentDidUpdate, componentDidMount)
     *  어떤 특정 상태의 변화에 반응하는 함수
     */
    useEffect(() => {
        console.log('After Rendering: update backgroundColor');
    }, [backgroundColor]); //backgroundColor가 변했을때 이벤트 발생


    /**
     *  4. Alternative02: componentDidMount & componentWillUnmount
     */
    useEffect(() => {
        console.log("After Mount(componentDidMount)");
        return () => {
            console.log("After Unmount(componentWillUnmount)");
        };
    }, []);

    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: backgroundColor
                } } />
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
}