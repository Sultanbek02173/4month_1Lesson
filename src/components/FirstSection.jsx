import { useState } from "react";

const FirstSection = (props) => {
    const {num, setNum} = props;
    
    const [text, setText] = useState('');

    const plus = () => {
        num >= 20 ? setNum(num) : setNum(num + 1)
        // if(num >= 20){
        //     setNum(num)
        // }else{
        //     setNum(num + 1)
        // }
    }
    const minus = () => {
        num <= 0 ? setNum(num) : setNum(num - 1)
        // if(num <= 0){
        //     setNum(num)
        // }else{
        //     setNum(num - 1)
        // }
    }
    const con = (num) => {
        setNum(num)
    }
    return (
        <div>
            <h1>Hello React!</h1>
            <p>{num}</p>
            <h2>{text}</h2>
            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={() => con(0)}>con</button>
        </div>
    );
}

export default FirstSection;
