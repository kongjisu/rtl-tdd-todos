import React from "react";
import { fireEvent, render } from "@testing-library/react"; //react-testing-library; 이건 예전 정보임 
import TodoForm from "./TodoForm";

describe('<TodoForm/>', () =>{

    it('has imput and a button',() =>{
        const {getByText, getByPlaceholderText} = render(<TodoForm/>);
        getByPlaceholderText('할 일을 입력하시오'); //input 있는지 없는지
        getByText('등록');// button이 있는지 없는지 


    })

    it('change input',() =>{
        const {getByPlaceholderText} =render(<TodoForm />);
        const input =getByPlaceholderText('할 일을 입력하시오');
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});
        expect(input).toHaveAttribute('value', 'TDD 배우기');
        
        })
        it('calls onInsert and clears input', () =>{
            const onInsert = jest.fn();//브라우저에서의 이벤트를 사용할 수 있게 하는 것이다.  
            const {getByText, getByPlaceholderText} = render(<TodoForm onInsert={onInsert} />);
            const input = getByPlaceholderText('할 일을 입력하시오');
            const button = getByText('등록');
            fireEvent.change(input, {target: {value: 'tdd 배우기'}});
            fireEvent.click(button);
            expect(onInsert).toBeCalledWith('tdd 배우기');
            expect(input).toHaveAttribute('value', '');

    })
            
})