import * as React from 'react';
import "./Form.css"

const Form:React.FC = () => {
    return (
        <form>
            <input type="text" className="question" id="nme" required autoComplete="off" />
            <label htmlFor="nme"><span>Привет</span></label>
            <hr />
            <textarea name="message" rows={1} className="question" id="msg" required autoComplete="off"></textarea>
            <label htmlFor="msg"><span>Я - влад. А ты?</span></label>
            <input type="submit" value="Разместить!" />
        </form>
    )
}

export default Form