import React from 'react'

const Form = ({newTaskName ,  setNewTaskName , handleSubmit}) => {
  return (
    <div>
        <form className='ListInput' onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Enter a new task'
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button type = "submit">
                Submit
            </button>
        </form>
        
    </div>
  )
}

export default Form