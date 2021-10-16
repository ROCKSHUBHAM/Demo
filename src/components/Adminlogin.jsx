import React, { useState } from 'react'
import Axiosproduct from './Rest';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
const Adminlogin = () => {
    let [data,updatedata]=useState({id:'',pwd:""});
    function getdata(event){
        updatedata({...data,[event.target.name]:event.target.value});
    }
    function submits(event){
        event.preventDefault();
        if(data.id==="admin"&&data.pwd==="12345"){
            ReactDOM.render(
                <>
                  <BrowserRouter>
                    <Axiosproduct/>
                  </BrowserRouter>
                </>,
                document.getElementById('root')
              );
        }
        else{
            window.alert("invalid id and password");
        }
    }
    return (
        <>
            <div className="container mt-3">
                <form action="" onSubmit={submits}>
                    <div className="form-group">
                        <label>id</label>
                        <input type="text" name="id" className="form-control" value={data.id} onChange={getdata}/>
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type="password" name="pwd" className="form-control" value={data.pwd} onChange={getdata}/>
                    </div>
                    <button className="btn btn-primary">login</button>
                </form>
            </div>
        </>
    )
}

export default Adminlogin;
