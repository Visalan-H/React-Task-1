import React from 'react';
import './Piechart.css'
function Piechart() {
    const pieOne = 30; 
    const pieTwo = 10;
    const pieThree = 20;
    const pieFour=40;
    return (
        <div className="main_pie" onClick={()=>console.log(pieOne)}>
            <div
                className="pie"
                style={{
                    '--one': `${pieOne}%`,
                    '--two': `${pieTwo}%`,
                    '--three': `${pieThree}%`,
                    '--four': `${pieFour}%`,
                }}
            ></div>
        </div>
    );
}

export default Piechart;