import React, {  useRef, useState } from 'react'
import "./Canva.css"
import ReactImageMagnify from 'react-image-magnify';
const product = {
    images: [
      {
        public_id: "cdscsd",
        url: "https://rukminim1.flixcart.com/image/416/416/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
      },
      {
        public_id: "cdcdcscsd",
        url: "https://rukminim1.flixcart.com/image/416/416/jfbfde80/camera/n/r/n/canon-eos-3000d-original-imaf3t5hjrz6zzzc.jpeg?q=70",
      },
      {
        public_id: "cdsccdssd",
        url:"https://rukminim1.flixcart.com/image/416/416/jmthle80-1/dslr-camera/n/r/n/eos-eos-3000d-canon-original-imaf9n6fqhmgt4cv.jpeg?q=70"
      },
      {
        public_id: "cdsccdssd",
        url:"https://rukminim1.flixcart.com/image/416/416/jmthle80-1/dslr-camera/n/r/n/eos-eos-3000d-canon-original-imaf9n6fqhmgt4cv.jpeg?q=70"
      },
      {
        public_id: "cdsccdssd",
        url:"https://rukminim1.flixcart.com/image/416/416/jmthle80-1/dslr-camera/n/r/n/eos-eos-3000d-canon-original-imaf9n6fqhmgt4cv.jpeg?q=70"
      }
    ]
  };

const Canva = () => {
   
    const [img, setImg] = useState(product.images[0].url);

    const hoverHandler = (image, i) => {
      setImg(image.url);
      refs.current.forEach((ref, index) => {
        if (index === i) {
          ref.classList.add("active");
        } else {
          ref.classList.remove("active");
        }
      });
    };
  
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
      if (el && !refs.current.includes(el)) {
        refs.current.push(el);
      }
    };
  return (
    <div className="container">
      <div className="left">
        <div className="left_1">
          {product.images.map((image, i) => (
            <div
              className={i === 0 ? "img_wrap active" : "img_wrap"}
              key={image.public_id}
              onMouseOver={() => hoverHandler(image, i)}
              ref={addRefs}
            >
              <img src={image.url} alt="" />
            </div>
          ))}
        </div>
        <div className="left_2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: img
              },
              largeImage: {
                src: img,
                width: 1000,
                height: 1000
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "140%"
              }
            }}
          />
        </div>
      </div>
     
    </div>
  );
};

export default Canva
