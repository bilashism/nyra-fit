import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyReviewItem from "./MyReviewItem";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState();
  const [myServicesLoading, setMyServicesLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const APP_SERVER = import.meta.env.VITE_APP_SERVER;

  useEffect(() => {
    if (!user.email) return;
    fetch(`${APP_SERVER}/myReviews?userEmail=${user.email}`, {})
      .then(res => res.json())
      .then(data => {
        setMyReviews(data);
        setMyServicesLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="sm:text-3xl text-2xl font-medium title-font py-4 my-5 text-gray-900 text-center">
        {myReviews?.length ? `My Reviews` : `No reviews are added yet!`}
      </h2>
      {myServicesLoading ? (
        <LoadingCircle />
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {myReviews.map(myReview => (
            <MyReviewItem key={myReview._id} myReview={myReview} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
