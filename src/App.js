import React from 'react';
import './App.css';

import { Navigate, Routes, Route} from 'react-router-dom';
import ContactList from './Components/Contacts/ContactList/ContactList';
import AddContact from './Components/Contacts/AddContact/AddContact';
import EditContact from './Components/Contacts/EditContact/EditContact';
import ViewContact from './Components/Contacts/ViewContact/ViewContact';
import NavBar from './Components/NavCompo/NavBar';
// // import { ContactList } from './Components/Contacts/ContactList/ContactList';
// //  import { Spinner } from './Components/Spinner/Spinner';


function App() {
  return (
    <div className="App">
     {/* .btn btn-primary
     <button className='btn btn-primary'><i className='fa fa-home me-2'></i>Home</button>
    <br></br>
    <button className='btn btn-danger'><i className='fa fa-close me-2'></i>close</button>
    <br></br>
    <button className='btn btn-secondary'><i className='fa fa-eye me-2'></i>VIEW</button>
    <br></br>
    <button className='btn btn-dark my-2'><i className='fa fa-plus-circle me-2'></i>ADD</button> */}

    <React.Fragment>
      {/* <Spinner/> */}
      <NavBar/>
    <Routes>
      <Route path='/' element={<Navigate to={'contacts/list'}/>}/>
      <Route path='Contacts/list' element={<ContactList/>}/>
      <Route path='Contacts/add' element={<AddContact/>}/>
      <Route path='Contacts/edit/:contactId' element={<EditContact/>}/>
      <Route path='Contacts/view/:contactId' element={<ViewContact/>}/>
      {/* <Route path='Contacts/add/:contactId' element={<AddContact/>}/> */}
     

    </Routes>
    </React.Fragment>

      
    </div>
  );
}

export default App;
