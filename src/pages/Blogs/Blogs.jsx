import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 py-4 text-center text-gray-900">
        Blogs
      </h2>
      <div className="grid gap-16">
        {/* blog 1 */}
        <div className="grid lg:grid-cols-12 mx-auto shadow-md">
          <figure className="text-center lg:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="article cover"
              className="h-full object-cover"
              width="640"
              height="480"
              decoding="async"
              fetchpriority="low"
            />
          </figure>
          <div className="flex flex-col p-6 lg:col-span-8 lg:p-10 bg-slate-100">
            <h2 className="text-3xl font-semibold">
              Difference between SQL and NoSQL
            </h2>

            <div className="flex-1 pt-4">
              <ol className="flex flex-col gap-4 items-start">
                <li>
                  <strong>Type –</strong> <br />
                  SQL databases are primarily called as Relational Databases
                  (RDBMS); whereas NoSQL database are primarily called as
                  non-relational or distributed database. <p> </p>
                </li>
                <li>
                  <strong>Language –</strong> <br />
                  SQL databases defines and manipulates data based structured
                  query language (SQL). Seeing from a side this language is
                  extremely powerful. SQL is one of the most versatile and
                  widely-used options available which makes it a safe choice
                  especially for great complex queries. But from other side it
                  can be restrictive. SQL requires you to use predefined schemas
                  to determine the structure of your data before you work with
                  it. Also all of your data must follow the same structure. This
                  can require significant up-front preparation which means that
                  a change in the structure would be both difficult and
                  disruptive to your whole system.{" "}
                  <p>
                    A NoSQL database has dynamic schema for unstructured data.
                    Data is stored in many ways which means it can be
                    document-oriented, column-oriented, graph-based or organized
                    as a KeyValue store. This flexibility means that documents
                    can be created without having defined structure first. Also
                    each document can have its own unique structure. The syntax
                    varies from database to database, and you can add fields as
                    you go.{" "}
                  </p>
                  <p> </p>
                </li>
                <li>
                  <strong>Scalability –</strong> <br />
                  In almost all situations SQL databases are vertically
                  scalable. This means that you can increase the load on a
                  single server by increasing things like RAM, CPU or SSD. But
                  on the other hand NoSQL databases are horizontally scalable.
                  This means that you handle more traffic by sharding, or adding
                  more servers in your NoSQL database. It is similar to adding
                  more floors to the same building versus adding more buildings
                  to the neighborhood. Thus NoSQL can ultimately become larger
                  and more powerful, making these databases the preferred choice
                  for large or ever-changing data sets. <p> </p>
                </li>
                <li>
                  <strong>Structure –</strong> <br />
                  SQL databases are table-based on the other hand NoSQL
                  databases are either key-value pairs, document-based, graph
                  databases or wide-column stores. This makes relational SQL
                  databases a better option for applications that require
                  multi-row transactions such as an accounting system or for
                  legacy systems that were built for a relational structure.{" "}
                  <p> </p>
                </li>
                <li>
                  <strong>Property followed –</strong> <br />
                  SQL databases follow ACID properties (Atomicity, Consistency,
                  Isolation and Durability) whereas the NoSQL database follows
                  the Brewers CAP theorem (Consistency, Availability and
                  Partition tolerance). <p> </p>
                </li>
                <li>
                  <strong>Support –</strong> <br />
                  Great support is available for all SQL database from their
                  vendors. Also a lot of independent consultations are there who
                  can help you with SQL database for a very large scale
                  deployments but for some NoSQL database you still have to rely
                  on community support and only limited outside experts are
                  available for setting up and deploying your large scale NoSQL
                  deployments. <br />{" "}
                </li>
              </ol>
            </div>

            <div className="flex items-center justify-between pt-6">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="self-center text-sm">by Leroy Jenkins</span>
              </div>
            </div>
          </div>
        </div>

        {/* blog 2 */}
        <div className="grid lg:grid-cols-12 mx-auto shadow-md">
          <figure className="text-center lg:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="article cover"
              className="h-full object-cover"
              width="640"
              height="480"
              decoding="async"
              fetchpriority="low"
            />
          </figure>
          <div className="flex flex-col p-6 lg:col-span-8 lg:p-10 bg-slate-100">
            <h2 className="text-3xl font-semibold">
              What is JWT, and how does it work?
            </h2>

            <div className="flex-1 pt-4">
              <p className="">
                JSON Web Token is an open industry standard used to share
                information between two entities, usually a client (like your
                app's frontend) and a server (your app's backend).
                <br />
                They contain JSON objects which have the information that needs
                to be shared. Each JWT is also signed using cryptography
                (hashing) to ensure that the JSON contents (also known as JWT
                claims) cannot be altered by the client or a malicious party.
                <br />
                For example, when you sign in with Google, Google issues a JWT
                which contains a JSON payload.
              </p>
              <br />
              <br />
              <p className="">
                To put it simply, a token is a string that contains some
                information that can be verified securely. It could be a random
                set of alphanumeric characters which point to an ID in the
                database, or it could be an encoded JSON that can be
                self-verified by the client (known as JWTs).
              </p>
            </div>

            <div className="flex items-center justify-between pt-6">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="self-center text-sm">by Leroy Jenkins</span>
              </div>
            </div>
          </div>
        </div>

        {/* blog 3 */}
        <div className="grid lg:grid-cols-12 mx-auto shadow-md">
          <figure className="text-center lg:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="article cover"
              className="h-full object-cover"
              width="640"
              height="480"
              decoding="async"
              fetchpriority="low"
            />
          </figure>
          <div className="flex flex-col p-6 lg:col-span-8 lg:p-10 bg-slate-100">
            <h2 className="text-3xl font-semibold">
              What is the difference between javascript and NodeJS?
            </h2>

            <div className="flex-1 pt-4">
              <p className="">
                Difference between JavaScript and Node.js JavaScript is a proper
                high-level programming language used to create web scripts
                whereas Node.js is a run time environment built on google’s v8
                engine.
                <br />
                <br />
                JavaScript is executed in the browser whereas using Node.js
                gives us the ability to execute JavaScript outside the browser.
                <br />
                <br />
                JavaScript can manipulate DOM or add HTML within whereas Node.js
                doesn’t have the capability to add HTML.
                <br />
                <br />
                JavaScript is mainly used to create front end web applications
                or develop client-side whereas Node.js is used on the back end
                development that is server-side development
                <br />
                <br />
                JavaScript follows the standard of JavaScript when writing
                programs whereas Node.js is written in C++ while using the v8
                engine, it runs JavaScript outside the browser.
                <br />
                <br />
                JavaScript requires any running environment as it can execute on
                any engine such as Firefox’s spider monkey, v8 engine of google
                chrome, JavaScript core of Safari whereas Node.js runs only on
                the v8 engine of google chrome.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="self-center text-sm">by Leroy Jenkins</span>
              </div>
            </div>
          </div>
        </div>

        {/* blog 4 */}
        <div className="grid lg:grid-cols-12 mx-auto shadow-md">
          <figure className="text-center lg:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1623520527569-fee1da87f598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="article cover"
              className="h-full object-cover"
              width="640"
              height="480"
              decoding="async"
              fetchpriority="low"
            />
          </figure>
          <div className="flex flex-col p-6 lg:col-span-8 lg:p-10 bg-slate-100">
            <h2 className="text-3xl font-semibold">
              How does NodeJS handle multiple requests at the same time?
            </h2>

            <div className="flex-1 pt-4">
              <p className="">
                We know NodeJS application is single-threaded. Say, if
                processing involves request A that takes 10 seconds, it does not
                mean that a request which comes after this request needs to wait
                10 seconds to start processing because NodeJS event loops are
                only single-threaded. The entire NodeJS architecture is not
                single-threaded.
                <br />
                <br />
                <strong>How NodeJS handle multiple client requests?</strong>
                <br />
                <br />
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue.
                <br />
                <br />
                If NodeJS can process the request without I/O blocking then the
                event loop would itself process the request and sends the
                response back to the client by itself. But, it is possible to
                process multiple requests parallelly using the NodeJS cluster
                module or worker_threads module.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="self-center text-sm">by Leroy Jenkins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
