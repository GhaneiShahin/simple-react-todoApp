import React from 'react';
import Todo from './Todo';

const Todos = ({todos, deleted, edited}) => {
      return (
            <div>
                  {todos.map(t => (
                        <Todo
                              key={t.id}
                              todos={t.theTodo}
                              deleted={() => deleted(t.id)}
                              edited={e => edited(e, t.id)}/>
                  ))}
            </div>
       );
}

export default Todos;