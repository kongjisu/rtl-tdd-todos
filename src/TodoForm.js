import React, { useCallback, useState } from "react";

const TodoForm =() => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e =>{
        setValue(e.target.value);


    }, []);
    return (
        <from>
            <input placeholder ="할 일을 입력하시오" value={value} onChange={onChange} />
            <button type="submit">등록</button>

        </from>

    );


}

export default TodoForm;