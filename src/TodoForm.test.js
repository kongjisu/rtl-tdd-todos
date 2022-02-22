import React from "react";
import { render } from "@testing-library/react"; //react-testing-library; 이건 예전 정보임 
import TodoForm from "./TodoForm";

describe('<TodoForm/>', () =>{

    it('has imput and a button',() =>{
        const {getByText, getByPlaceholderText} = render(<TodoForm/>);
        getByPlaceholderText('할 일을 입력하시오'); //input 있는지 없는지
        getByText('등록');// button이 있는지 없는지 


    })
})