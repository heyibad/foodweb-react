import React from 'react';

const Contact = () => {
  return (
    <>
      <section>
        <div className="menu-main main-box">
          <h1 className="pr3 mt-5">CONTACT US</h1>
          <hr className="hr4" />

          <div className="mb-3 mt-5 c-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 c-form">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="main-btn button3" onClick={() => i()}>
            SUBMIT
          </button>
        </div>
      </section>
    </>
  );
}

export default Contact;
