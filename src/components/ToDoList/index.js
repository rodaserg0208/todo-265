import React from 'react';
import "./index.css";

const ToDoList = () => {

    return (
        <div className="layout-column align-items-center justify-content-start">
            <section className="layout-row align-items-center justify-content-center mt-30">
                <input
                    placeholder="Task Name"
                    data-testid="input-task-name"
                />
                <button className="outlined" data-testid="add-task-button">Add Task</button>

            </section>
            <div className="card w-40 pt-30 pb-8 mt-2">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={3}>Name</th>
                        </tr>
                    </thead>
                    <tbody data-testid="tasks-list">
                        <tr>
                            <td>Task 1</td>
                            <td><button>Mark as Complete</button></td>
                            <td><button className="danger">Delete</button></td>
                        </tr>
                        <tr>
                            <td>Task 2</td>
                            <td><button>Mark as Complete</button></td>
                            <td><button className="danger">Delete</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <section className="layout-row align-items-center justify-content-center mt-30">
                <input className="show-completed-tasks-checkbox" data-testid="show-completed-tasks-checkbox" placeholder="Show Completed Tasks" type="checkbox" checked={true} />
                <label className="show-completed-tasks-label">Show Completed Tasks</label>
            </section>

        </div>
    );
}

export default ToDoList;