import "../Styling/Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import mobileImg1 from "../assets/mobileImg1.webp";
import mobileImg2 from "../assets/mobileImg2.png";
import mobileImg3 from "../assets/mobileImg3.png";
import mobileImg4 from "../assets/mobileImg4.webp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="slider">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={2000}
        >
          <div className="img1">
            <img src={img1} alt="img for slider" />
          </div>
          <div className="img2">
            <img src={img2} alt="img for slider" />
          </div>
          <div className="img3">
            <img src={img3} alt="img for slider" />
          </div>
          <div className="img4">
            <img src={img4} alt="img for slider" />
          </div>
        </Carousel>
      </div>
      <div className="mobileSlider">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={2000}
        >
          <div className="img1">
            <img src={mobileImg1} alt="img for slider" />
          </div>
          <div className="img2">
            <img src={mobileImg2} alt="img for slider" />
          </div>
          <div className="img3">
            <img src={mobileImg3} alt="img for slider" />
          </div>
          <div className="img4">
            <img src={mobileImg4} alt="img for slider" />
          </div>
        </Carousel>
      </div>

      <div className="allItemCollection">
        <Items img="https://www.gonoise.com/cdn/shop/files/2_fb338103-931d-45d6-ab7f-e67e09f60432.png?v=1701155326" name="Pro 5 Series" link="/products"/>
        <Items img="https://www.gonoise.com/cdn/shop/files/New_launch_7b1114a9-82fe-4c68-8a51-c076ac8e7a82.png?v=1669961808" name="New Launch" link="/"/>
        <Items img="https://www.gonoise.com/cdn/shop/files/Smart_watches_faf22dcd-3b66-427d-a3f0-2227e69764f1.png?v=1694695121" name="Speacel Deles" link="/"/>
        <Items img="https://www.gonoise.com/cdn/shop/files/Wireless_earbuds_1c1a039e-a404-4334-9697-e0a2d3c709e9.png?v=1669961808" name="WireLess Earbuds" link="/"/>
        <Items img="https://www.gonoise.com/cdn/shop/files/Calling_smartwatches_74f7b372-3e1e-4cdd-860f-9e883dfdda4e.png?v=1669961808" name="SmartWatch" link="/"/>
        <Items img="https://www.gonoise.com/cdn/shop/files/Amoled_Screen_6a2ea3b9-5a6b-4b2e-bcbb-0a062bd22c9b.png?v=1669961808" name="Amolate Screen" link="/"/>
        <Items img="https://www.gonoise.com/cdn/shop/files/nav.png?v=1684842058" name="Straps" link="/"/>
      </div>
    </>
  );
}

// function item() {
//   return (
    
//   );
// }

function Items(props) {
  return(
    <div className="item">
      <Link to={props.link}>
        <div className="img">
          <img
            src={props.img}
            alt=""
          />
        </div>
        <div className="name">
          <p>{props.name}</p>
        </div>
      </Link>
    </div>
  )
}
export default Home;
