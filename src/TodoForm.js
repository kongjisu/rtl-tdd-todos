import React, { useState, useCallback  } from "react";

const TodoForm =({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e =>{
        setValue(e.target.value);


    }, []);
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();

    }, [onInsert, value]);
    
    return (
        <from onSubmit={onSubmit}>
            
            <input placeholder ="할 일을 입력하시오" value={value} onChange={onChange} />
            <button type="submit">등록</button>

        </from>

    );
    }

export default TodoForm;