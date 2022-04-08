
import{createStore} from 'redux';
let rootReducer = (oldData={value:'shivkanya'},action)=>{
    let newData = oldData
    if(action.type === 'name'){
      newData.value='Shivkanya gurjar'
      return newData

    }else if(action.type === 'name1'){
      newData.value = 'Kiran Rathor'
      return newData
    }else{
      newData.value = 'aayushi sharma'
      return newData
    }
      
}
function App() {
  //state
  //function

  let store = createStore (rootReducer)
      console.log(store);
      store.subscribe(() => console.log(store.getState()))
      store.dispatch({type:'name'})
      store.dispatch({type:'name1'})
      store.dispatch({type:'name2'})
      //store.dispatch({type:'name3'})



  
  //return statement
  return (
    <>
    </>
  );
}

export default App;
