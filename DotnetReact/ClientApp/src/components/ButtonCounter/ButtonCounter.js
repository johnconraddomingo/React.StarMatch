import React, { useState } from 'react';
import './ButtonCounter.css';


const Display = (props) => {
    return (
        <div>Counter: {props.currentCount}</div>
    )
};

const Button = (props) => {

    const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}> + {props.increment}</button>
    )
};


export class ButtonCounter extends React.Component {
    
   CompletePage() {

        const [counter, setCounter] = useState(0);
        const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
        return (
            <>
                <Button onClickFunction={incrementCounter} increment={1} />
                <Button onClickFunction={incrementCounter} increment={5} />
                <Button onClickFunction={incrementCounter} increment={10} />

                <Display currentCount={counter} />
            </>
        );
    }

    render() {
        return <this.CompletePage />

    }

}