import React from 'react'

const ShowTask = ({ todoList }) => {
    return (
        <ul>
            {todoList.map((task) =>
                <li key={task.id} value={task.name}>
                    {task.name}
                </li>
            )}

        </ul>

    )
}

export default ShowTask