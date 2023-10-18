import React from 'react';
import './custom.css';
const Faq = () => {
  return (
    <>
      <section>
        <div className="logo p-3 mt-5">
          <h1 className="text-center text-dark">Frequently Asked Questions</h1>
          <hr className="hr5" />
        </div>
        <div className="container">
          <div className="accordion accordion-flush m-1 row mt-4 p-2" id="accordionFlushExample">
            <div className="accordion-item text-dark bg-light m-1">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <strong>#1 What do you have to sell?</strong>
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body bg-light text-dark row boxs">
                  <div className="col box">
                    <h3>We are bringing in our fold traditional, native, healthy and unique tasting sweets and snacks to be delivered at your doorstep.</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item text-light bg-dark m-1">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <strong>#2 Do you offer Cash on Delivery?</strong>
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body bg-dark text-light row boxs">
                  <div className="col box">
                    <h3>Yes, we offer Cash on Delivery, which most other websites don't offer.</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item text-light bg-dark m-1">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <strong>#3 When will my order be delivered?</strong>
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body bg-dark text-light row boxs">
                  <div className="col box">
                    <h3>Estimated delivery times are provided for each product. While sincere efforts are being made to deliver products within the given time frame, factors like availability, festive seasons, courier delays may cause delays, which are monitored to minimize inordinate delays.</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item text-light bg-dark m-1">
              <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <strong>#4 What guarantees freshness for the products ordered?</strong>
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body bg-dark text-light row boxs">
                  <div className="col box">
                    <h3>Tredy Foods strives to deliver fresh products. Systems are in place to source the best products and ensure safe delivery. We don't stock products but place orders upon receiving them. This centralizes the dispatch process, leading to economies of scale and quality control.</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item text-light bg-dark m-1">
              <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <strong>#5 How about packing?</strong>
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body bg-dark text-light row boxs">
                  <div className="col box">
                    <h3>Packing is a top priority. We take all steps to deliver products in a perfect and hygienic condition without any damage. The outer packing is done in a carton box to prevent rough handling from affecting the quality of the food item.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
