import React from "react";

const AddReview = () => {
  return (
    <form>
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
          placeholder="Leave a review..."></textarea>
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
