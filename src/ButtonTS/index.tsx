import * as React from 'react';

interface ButtonsTs {
    backgroundColor?:string;
    label?: string;
    height?:number;
}

const ButtonTS: React.FC<ButtonsTs> = ({backgroundColor,label, height}) => {
    return (
        <button style={{backgroundColor: backgroundColor, height:height}}>{label}тык ts</button>
    )
}

export default ButtonTS
