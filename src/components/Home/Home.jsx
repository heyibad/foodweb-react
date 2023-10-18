import React from 'react';
import img2 from "../../images/fb.png" 
const Home = () => {
  return (
    <>
      <section id="home" className="banner_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 text-center text-lg-start order-lg-1 order-2">
              <h1 className="pr">Food and groceries delivery from <span className="red">ڪراچي</span> Karachi’s best restaurants and shops</h1>
              <p className="pr2">The meals you love, <br /> We deliver with care</p>
              <a className="main-btn mt-1" href="menu.html">View Menu</a>
            </div>
            <div className="col-lg-7 text-center order-lg-2 order-1">
              <img src={img2}
              className="img-fluid" alt="Image Description" />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div className="c2">
        <div className="container pt-4">
          <div className="row">
            <h1>Find us in these cities and many more!</h1>
          </div>
          <div className="row pt-3">
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Islamabad.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">ISLAMABAD</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Karachi.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">KARACHI</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Lahore.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">LAHORE</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Rawalpindi.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">RAWALPINDI</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Multan.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">MULTAN</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Hyderabad.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">HYDERABAD</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Sialkot.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">SIALKOT</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Peshawar.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">PESHAWAR</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Sukkur.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">SUKKUR</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Murree.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">MURREE</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Mangla.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">MANGLA</h2>
            </div>
            <div className="col">
              <img src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-PanoAqil.jpg?width=250&height=250" alt="Image Description" />
              <h2 className="text-center">PANO</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
