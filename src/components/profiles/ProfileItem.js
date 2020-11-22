import React from "react";
import PropTypes from "prop-types";
import avatar from "../../img/avatar.png";

const ProfileItem = ({ profile: { name, age, gender, email, phoneNo } }) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name.toUpperCase()}</h2>
        <p className="my-1">AGE: {age && <span>{age}</span>} Yrs</p>
        <p className="my-1">
          GENDER: {gender && <span>{gender.toUpperCase()}</span>}
        </p>
        <p className="my-1">EMAIL-ID: {email && <span>{email}</span>}</p>
        <p className="my-1">PHONE-NO: {phoneNo && <span>{phoneNo}</span>}</p>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
