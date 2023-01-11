import React, {useState} from 'react';

function Todo() {

    const [todoList, setTodoList] = useState([
        {
            id: 0,
            title: 'Try to accomplish how jQuery died!',
            description: 'something important'
        }
    ]);

    const [input, setInput] = useState('');

    const handleAddTodo = (e: any) => {
        e.preventDefault();

        setTodoList([
            ...todoList,
            {
                id: todoList[todoList.length - 1].id + 1,
                title: input,
                description: 'not available!'
            }
        ]);

        // clear the input
        setInput('')
    }

    return (
        <>
            <div className="mx-auto mt-5 shadow-xl rounded p-16"
                 style={{maxWidth: '600px'}}>
                <h1 className="text-3xl uppercase font-bold text-slate-700">Todo
                    app</h1>
                <form action="">
                    <div className="flex mt-10 gap-3">
                        <input onChange={e => setInput(e.target.value)}
                               value={input}
                               type="text"
                               className="grow border border-solid border-slate-300 p-1 rounded-md focus:outline-blue-500"
                               autoFocus={true}
                        />
                        <button
                            onClick={handleAddTodo}
                            type="submit"
                            className="w-24 py-1 text-white bg-blue-500 rounded">
                            Add
                        </button>
                    </div>
                </form>
                {/*    TABLE*/}
                <div className="mt-7 mb-2">
                    <span
                        className='text-sm lowercase'> ℹ️ Unfinished business! </span>
                </div>
                <table className="table-auto w-full text-center">
                    <thead>
                    <tr>
                        <th className="p-4 border">#ID</th>
                        <th className="p-4 border">Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todoList.map(todo => {
                            return (
                                <tr key={todo.id}>
                                    <td className="p-4 border">{todo.id + 1}</td>
                                    <td className="p-4 border">{todo.title}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Todo;
