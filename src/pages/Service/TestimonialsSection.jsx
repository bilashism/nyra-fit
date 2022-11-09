import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Testimonial from "../../components/Testimonial";
import AddReview from "./AddReview";
const APP_SERVER = import.meta.env.VITE_APP_SERVER;

const TestimonialsSection = ({ serviceId }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${APP_SERVER}/testimonials?serviceId=${serviceId}`)
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div className="pb-8">
        <h2 className="pb-4">
          Please{" "}
          <Link
            to="/login"
            className="text-purple-600 font-bold hover:underline">
            Login
          </Link>{" "}
          to add a review!{" "}
        </h2>
        <AddReview />
      </div>

      <div className="grid grid-cols-1 gap-8">
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
