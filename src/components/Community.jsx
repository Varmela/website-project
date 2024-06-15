import React from "react";

const Community = ({ photoCommunity, date, description }) => {
  return (
    <>
    <div className="community">
      <img src={photoCommunity} alt="community" />
      <p>{date}</p>
      <h3>{description}</h3>
    </div>
    </>
    
  );
};

export default Community;
