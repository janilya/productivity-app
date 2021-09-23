/* eslint-disable */
import * as types from '../constants/actionTypes';

const initialState = {
  //changed taskList from {} to [] --JB
  username: null,
  taskList: [],
};

export default function taskReducers(state = initialState, action) {
  let taskList;

  switch (action.type) {
//***************************************************************************************    

    case types.ADD_TASK: {
      const newTask = action.payload;

      taskList = state.taskList.slice();
      taskList.push(newTask);

      return {
        ...state,
        taskList,
      };
    }
//***************************************************************************************

    case types.ADD_USER: {
      alert('You\'ve signed up please log in');
      return {
        ...state,
      };
    }
//***************************************************************************************

    case types.VERIFY_USER: {
      const { username, tasks } = action.payload;
      console.log('THIS IS IN REDUCER AFTER LOGGING IN', action.payload);
      /* {username: string,
          password: string,
          tasks: [{taskName: string, isCompleted; boolean}, {}, {}]
        }
      */

      taskList = tasks ? tasks : [];

      return {
        username,
        taskList,
      };
    }

//***************************************************************************************    

// WE WILL COME BACK TO THIS LATER - 9/21 JB
    case types.TOGGLE_TASK: {
      // if its false change it to true and vice versa

      // access the task list at the input index, access the isComplete key in that object
      taskIndex = action.payload;
      taskList[taskIndex].isComplete = !taskList[taskIndex].isComplete;
    
      
      // update task list at the end 
      return {
        ...state,
        taskList,
      };
    }
//***************************************************************************************    

    case types.DELETE_TASK: {
      alert('Task has successfully been deleted.')
      taskList = action.payload;
      console.log('TASKREDUCER', taskList);
      console.log(state);
      return {
        ...state,
        taskList,
      }
    }
    
//***************************************************************************************    
    default: {
      return state;
    }
  }
}
/*  Redux-Thunks  (is a middleware, allows you to make action-creations return a function)

Thunks are just like action-creators, but of creating an object used to modify state,
they create a function that gives you access to your state, and dispatch new  actions

  export const saveTasks = () => async (dispatch,getState) => {
    const tasks = getState().taskList?
    await fetch('localhost:3000/testing??',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tasks)
    })
  }
  - The second function is postponed until a certain condition is met.

*/
