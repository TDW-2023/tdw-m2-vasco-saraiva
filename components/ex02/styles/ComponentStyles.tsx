import styled from "styled-components";

const TodoInput = styled.input`
    border: 2px solid black;
    padding-left: 1rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    width: 100%;
`

const TodoCard = styled.section`
    background-color: white;
    padding: 2rem 3rem;
    width: 35rem;
`

const TodoTitle = styled.section`
    font-size: 1.5rem;
    text-align: center;
`

const RemainingText = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
`

const Background = styled.main`
    background: #F3F4F6;
    min-height: 100vh;
`

const Box = styled.section`
    display: flex;
    justify-content: center;
    padding: 5rem 0;
    height: screen;
`

const FormAddTodo = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1.7rem 0;
    font-size: 1.2rem;
    
`

const ButtonAddTodo = styled.button`
    background-color: black;
    color: white;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

`

const DivSearchTodo = styled.div`
    display: flex;
    font-size: 1.2rem;
`

const DivTodoFilter = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
  justify-content: space-between;
`

const ButtonTodoFilter = styled.button<{ $isSelected?: boolean }>`
  background: ${props => props.$isSelected ? '#ebebeb' : 'white'};
  border: 2px solid #dadada;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    background: #ebebeb; // <Thing> when hovered
  }
`

const BoxTodoList = styled.div`
  margin: 1.5rem 0;
`

const BoxItemTodoList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const InputCheckTodoList = styled.input`
  width: 2rem;
  height: 2rem;
`

const BoxButtonsTodoList = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const ButtonTodoList = styled.button`
  width: 100%;
  border: 2px solid black;
  padding: 0.8rem 0;
  transition: all 0.4s;

  &:hover{
    background: black;
    color: white;
  }

`

const DeleteButtonTodoList = styled(ButtonTodoList)`
  background: #e93010;
  color: white;
  border: none;
  transition: all 0.2s;

  &:hover{
    background: #af2b14;
  }

`;

export {
    TodoInput,
    TodoCard,
    TodoTitle,
    RemainingText,
    Background,
    Box,
    FormAddTodo,
    ButtonAddTodo,
    DivSearchTodo,
    DivTodoFilter,
    ButtonTodoFilter,
    BoxTodoList,
    BoxItemTodoList,
    InputCheckTodoList,
    BoxButtonsTodoList,
    ButtonTodoList,
    DeleteButtonTodoList,
}
