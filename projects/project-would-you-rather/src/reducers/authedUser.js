import { SET_AUTHED_USER } from '../actions/authedUser';

export default function authedUser (state = null, action) {
    switch (action.type) {
      case SET_AUTHED_USER :
        {
          //store in browser
          if(action.id === null)
             localStorage.removeItem("userSession");
          else 
             localStorage.setItem("userSession", JSON.stringify(action.id));

          return action.id
        }
      default :
        return state
    }
  }