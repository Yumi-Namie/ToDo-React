import { useState } from "react";
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';

import ToDoForm from "./ToDoForm";


type ToDo = {
  id: any;
  text: string;
};

type ToDoItemProps = {
  toDos: ToDo[];
  removeToDo: (id: any) => void;
  updateToDo: (id: any, newValue: ToDo) => void;
};

const ToDo = ({ toDos, removeToDo, updateToDo }: ToDoItemProps) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value: any) => {
    updateToDo(edit.id, value);
    setEdit({ id: null, value: '' });
  };
  
  

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return toDos.map((toDo) => (
    <div className="toDo-row" key={toDo.id}>
      <div>
        {toDo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeToDo(toDo.id)} className="delete-icon" />
        <TiEdit onClick={() => setEdit({ id: toDo.id, value: toDo.text })} />
      </div>
    </div>
  ));
}  

export default ToDo;
