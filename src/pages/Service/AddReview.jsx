import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { TestimonialsContext } from "./TestimonialsSection";

const AddReview = () => {
  const APP_SERVER = import.meta.env.VITE_APP_SERVER;
  const { setTestimonials, serviceId } = useContext(TestimonialsContext);
  const { user } = useContext(AuthContext);
  const reviewRef = useRef();
  // console.log(user);
  const { email, displayName, photoURL } = user;

  const handleReviewSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const review = reviewRef.current.value;

    const testimony = {
      serviceId,
      text: review,
      reviewer: {
        name: displayName,
        img: photoURL,
        email: email
      }
    };
    fetch(`${APP_SERVER}/testimonials`, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(testimony)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        fetch(`${APP_SERVER}/testimonial/${data.insertedId}`)
          .then(res => res.json())
          .then(data => {
            setTestimonials(prev => [...prev, data]);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };
  return (
    <form onSubmit={handleReviewSubmit}>
      <div className="relative z-0 mb-6 w-full group">
        <label
          htmlFor="review"
          className="block mb-2 text-sm font-medium text-gray-900">
          Your review
        </label>
        <textarea
          id="review"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a review..."
          ref={reviewRef}
          required></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
          Add review
        </button>
      </div>
    </form>
  );
};

export default AddReview;
