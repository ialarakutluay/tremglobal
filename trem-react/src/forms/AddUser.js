import React, { Component } from 'react'
import UserConsumer from "../context";
import axios from "axios";

class AddUser extends Component {

  state = {
    suc: false,
    name: "",
    mail: "",
    phone: "",
    error: false
  }

  validateForm = () => {
    const { name, phone, mail } = this.state;
    if (name === "" || phone === "" || mail === "") {
      return false;
    }

    if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(mail)) {
      return false;
    }

    return true;

  }


  changeInput = (e) => {
    this.setState({

      [e.target.name]: e.target.value
    })
  }

  addUser = async (dispatch, e) => {
    e.preventDefault();


    const { name, mail, phone } = this.state;

    const newUser = {

      name,
      mail,
      phone
    }

    console.log(newUser);


    if (!this.validateForm()) {
      this.setState({
        error: true
      })
      return;
    }

    const response = await axios.post('http://localhost/workspace/trem-back/', newUser);

    dispatch({ type: "ADD_USER", payload: response.data });

    this.setState({
      suc: true
    })

    setTimeout(function () {
      window.location.reload(1);
    }, 5000);

  }
  render() {
    const { suc, name, phone, mail, error } = this.state;
    console.log(name, mail, phone);

    return <UserConsumer>
      {
        value => {
          const { dispatch } = value;
          return (
            <div className="col-md-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4>Lead Form</h4>
                </div>

                <div className="card-body">
                  {
                    error ?
                      <div className="alert alert-danger">
                        Lütfen bilgilerinizi kontrol edin.
                      </div>
                      : null
                  }
                  {
                    suc ?
                      <div className="alert alert-success">
                        Form başarılı bir şekilde gönderilmiştir.
                      </div>
                      : null
                  }

                  <form onSubmit={this.addUser.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        id="id"
                        placeholder="Please Enter Full Name"
                        className="form-control"
                        required="Required"
                        value={name}
                        onChange={this.changeInput}

                      />

                    </div>
                    <div className="form-group">
                      <label htmlFor="mail">Mail*</label>
                      <input
                        type="email"
                        name="mail"
                        id="mail"
                        placeholder="Enter mail"
                        className="form-control"
                        required="Required"
                        value={mail}
                        onChange={this.changeInput}
                      />

                    </div>


                    <div className="form-group">
                      <label htmlFor="phone">Phone*</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter phone"
                        className="form-control"
                        required="Required"
                        value={phone}
                        onChange={this.changeInput}
                      />
                    </div>

                    <button className="btn btn-warning btn-block" type="submit">Send</button>


                  </form>
                </div>

              </div>
            </div>
          )
        }
      }

    </UserConsumer>





  }
}
export default AddUser;
