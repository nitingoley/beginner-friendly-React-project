import React, { useState } from "react";
import "./styles.css";

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: "John Doe", feedback: "This product has significantly improved our team's productivity.", rating: 5 },
    { name: "Jane Smith", feedback: "Amazing experience! It saved me hours of work every week.", rating: 4 },
    { name: "Sam Wilson", feedback: "The interface is sleek, and the support team is top-notch.", rating: 5 },
    { name: "Emily Johnson", feedback: "Highly recommend this tool for any small business looking to scale.", rating: 4 },
    { name: "Michael Brown", feedback: "Very user-friendly. It exceeded my expectations in every way.", rating: 5 },
    { name: "Anna Lee", feedback: "This has been a game-changer for our team! Wouldn’t trade it for anything.", rating: 5 }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonial">
      <div className="testimonial-quotes">{testimonials[currentIndex].name}</div>
      <div className="testimonial-author">- {testimonials[currentIndex].feedback}</div>

      <div className="testimonial-nav">
        <button className="prev-btn" onClick={handlePrevClick}>Prev</button>
       <br />
        <button className="next-btn" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};
