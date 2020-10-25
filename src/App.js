import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
    const [todos, setTodos] = useState([]);
    /* { useSatate = react hook } todos=collect the values in the array or list; setTools= it allows changes to be done add,delete,etc to the list.(note: refreshing window after changing the list wont store data in db as it is state(short term memory locator), so we setup db such that after changing the list values get updated)*/
    const [input, setInput] = useState('');
    // When the app loads, we need to listn to thedb and fetch new todos as they get added/removed
    useEffect(() => {
      //this code here... fires when the app.js laods
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
       // console.log(snapshot.docs.map(doc => doc.data().todo));
        setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
      })
    }, []);
    console.log('>',input);

    const addTodo = (event) => {
      //this will fire off when we click the button
      event.preventDefault(); // Will stop the refresh

      db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })


    console.log('>>','Im working!!');
    setTodos([...todos,input]);
    setInput(''); //clear up the input after clicking add todo button
    }

    return(
    <div className="App">
      <h1>Hello World</h1>
      <form>
      <FormControl>    
        <InputLabel>Write a ToDo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disable={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add ToDo
      </Button>
      {/* <button type="submit" onClick={addTodo}>Add ToDo</button> */}
      </form>
      <ul>
        {todos.map(todo => (   /* Like a for loop in JSX were map go through every array item and list it down */
        <ToDo todo={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
    );
}

export default App;
