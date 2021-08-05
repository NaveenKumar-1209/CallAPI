import React from "react";
import "./Listing.css";

const Listing = (props) => {
  return (
    <section className="individual-list">
      <h2>Loaded Todo List</h2>
      <ul>
        {props.info.map((profile, index) => {
          return (
            <div className="container">
              <li key={profile.id}>
                <div className="img">
                  <img src={profile.avatar} />
                </div>
                <div className="person-details">
                  <h3>Profile's details</h3>
                  <p>
                    {profile.first_name} {profile.last_name}
                  </p>
                  <p>{profile.email}</p>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Listing;
