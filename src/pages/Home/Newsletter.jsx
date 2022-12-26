import React from "react";
import NewsletterSubscription from "../../components/NewsletterSubscription";

const Newsletter = () => {
  return (
    <section className="relative isolate py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl xl:text-3xl text-center mb-12 text-white drop-shadow">
          Receive the latest monthly news and updates - subscribe here
        </h2>
        <div className="">
          <NewsletterSubscription />
        </div>
      </div>
      <div className="absolute w-full h-full -z-10 overflow-hidden top-0 after:absolute after:bg-slate-900 after:w-full after:h-full after:top-0 after:bg-opacity-80 after:backdrop-filter after:backdrop-blur">
        <figure className="w-full h-full ">
          <picture>
            <source
              srcSet="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80"
              media="(min-width: 0px)"
            />
            <img
              src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80"
              alt="Start Selling banner"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
};

export default Newsletter;
