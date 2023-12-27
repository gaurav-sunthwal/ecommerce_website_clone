import "../Styling/Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";

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
    </>
  );
}

export default Home;
