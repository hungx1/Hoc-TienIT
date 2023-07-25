import {SET_JOB, ADD_JOB, DEL_JOB} from './constants'


//1. Init state
export const initState = {
    job: '', 
    jobs: []
}


//3. Reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOB: {
            newState =  {
                ...state, 
                job: action.payload
            }
            break
        }
        case ADD_JOB: {
            newState =  {
                ...state, 
                jobs: [...state.jobs, action.payload]
            }
            break
        }
        case DEL_JOB: {
            const newJobs = [...state.jobs]

            newJobs.splice(action.payload, 1)
            newState =  {
                ...state, 
                jobs: newJobs
            }
            break
        }
        default: 
            throw new Error("Invalid action")
    }
    return newState
    
}

export default reducer