import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";



const ToDoForm = (props: any) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit({
      id: uuid(),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='toDo-form'>
      {props.edit ? (
        <>
          <input
            type='text'
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            className='toDo-input edit'
          />
          <button className='toDo-button edit'>Update</button>
        </>
      ) : (
        <>
          <input
            type='text'
            placeholder='Add a to do'
            value={input}
            onChange={handleChange}
            name='text'
            className='toDo-input'
          />
          <button className='toDo-button'> Add something</button>
        </>
      )}
    </form>
  );
};

export default ToDoForm;
