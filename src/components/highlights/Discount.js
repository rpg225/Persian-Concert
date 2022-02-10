import React,  { useState, useEffect} from 'react';
import { Fade, Slide } from "react-reveal";

function Discount() {
    const [isInitial, setIsInitial] = useState(true);
    const [discountStart, setDiscountStart] = useState(0);
    const discountEnd = 30;

    const percentage = () => {
      setIsInitial(false);
      if (discountStart < discountEnd) {
        setDiscountStart((prevState) => prevState + 1);
      }
    };

    useEffect(() => {
  if (!isInitial) {
    setTimeout(() => {
      percentage();
    }, 30);
  }
}, [discountStart]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={percentage}>
          <div className="discount_percentage">
            <span>
            {discountStart}%
            </span>
            <span>
            Discount
            </span>
          </div>
        </Fade>
        <Slide left>
          <div className="discount_description">
              <h3>Purchase before July 21st</h3>
              <p>
              Graphic designers, printers and texts, but also newspapers and magazines in columns and rows as needed, and for the current state of technology required, and a variety of applications aimed at improving practical tools, many books in the sixty-three percent of the past and present , Extensive knowledge of the community and professionals.
              </p>
          </div>
        </Slide>
      </div>
      <button> Purchase </button>
    </div>
  );
}

export default Discount;
