import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Axiosproduct = () => {
    let [pdata, updatepdata] = useState([]);
    let [ndata, updatendata] = useState({ name: "", price: "", cat: "", cmp: "" });
    let [udata, updateudata] = useState({id:"", name: "", price: "", cat: "", cmp: "" });
    useEffect(() => {
        async function show() {
            let d = await axios.get('https://restapittt.herokuapp.com/products/');
            updatepdata(d.data);
        }
        show();
    })
    function getndata(event) {
        updatendata({ ...ndata, [event.target.name]: event.target.value });
    }
    function getudata(event) {
        updateudata({ ...udata, [event.target.name]: event.target.value });
    }
    async function submits(event) {
        event.preventDefault();
        let d = await axios.post('https://restapittt.herokuapp.com/products/', ndata);
        if (d.status === 201) {
            window.alert("successfully add product");
        }

    }
    async function Usubmits(event){
        event.preventDefault();
        let options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(udata)
          }
        let d=await fetch(`https://restapittt.herokuapp.com/products/${udata.id}/`,options);
        if(d.status===200){
            window.alert("successfully update product");
        }
        
    }
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <table className="table table-bordered table-hover text-center">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                                <th>category</th>
                                <th>company</th>
                                <th>delete</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pdata.map((val) => {
                                    return (
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>{val.name}</td>
                                            <td>{val.price}</td>
                                            <td>{val.cat}</td>
                                            <td>{val.cmp}</td>
                                            <td><button className="btn btn-danger" onClick={() => {
                                                async function deletes() {
                                                    let d = await axios.delete(`https://restapittt.herokuapp.com/products/${val.id}`);
                                                    if (d.status === 204) {
                                                        window.alert("successfully delete")
                                                    }
                                                }
                                                deletes();
                                            }}>delete</button></td>
                                            <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{
                                                updateudata(val);
                                            }}>
                                                update
                                            </button>
                                            </td>
                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                       
                                                        <div className="modal-body">
                                                            <form action="" onSubmit={Usubmits}>
                                                                <div className="form-group">
                                                                    <label>name</label>
                                                                    <input type="text" className="form-control" name="name" value={udata.name} onChange={getudata} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>price</label>
                                                                    <input type="text" className="form-control" name="price" value={udata.price} onChange={getudata} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>category</label>
                                                                    <input type="text" className="form-control" name="cat" value={udata.cat} onChange={getudata} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>company</label>
                                                                    <input type="text" className="form-control" name="cmp" value={udata.cmp} onChange={getudata} />
                                                                </div>
                                                                <button className="btn btn-primary mt-2" data-bs-dismiss="modal">add product</button>
                                                            </form>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <form action="" onSubmit={submits}>
                        <div className="form-group">
                            <label>name</label>
                            <input type="text" className="form-control" name="name" value={ndata.name} onChange={getndata} />
                        </div>
                        <div className="form-group">
                            <label>price</label>
                            <input type="text" className="form-control" name="price" value={ndata.price} onChange={getndata} />
                        </div>
                        <div className="form-group">
                            <label>category</label>
                            <input type="text" className="form-control" name="cat" value={ndata.cat} onChange={getndata} />
                        </div>
                        <div className="form-group">
                            <label>company</label>
                            <input type="text" className="form-control" name="cmp" value={ndata.cmp} onChange={getndata} />
                        </div>
                        <button className="btn btn-primary mt-2">add product</button>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Axiosproduct;