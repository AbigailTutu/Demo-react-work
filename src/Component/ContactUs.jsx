/* eslint-disable no-unused-vars */
import React from "react";

const ContactUs = () => {
  return (
    <div className="body">
      <div className="container header">
        <h1 className="text-center">CONTACT US</h1>
      </div>

      <form className="form">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1 style={{FontSize: "bolder", Color: "orange;"}}>
                For more information you can send us a message
              </h1>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputName1"
                  placeholder="Full Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>

              <div>
                <label>Your message</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Text input"
                />
              </div>

              <button type="submit" className="btn btn-default submit-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
