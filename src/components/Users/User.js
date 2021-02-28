import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMoneyBillAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./User.css";

const User = (props) => {
  const { id, name, email, img, salary } = props.user;
  console.log(props);
  return (
    <div className="user">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="card-detail">
        <h6>
          <FontAwesomeIcon icon={faUser} /> Name: {name}
        </h6>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: {email}
        </p>
        <p>
          <FontAwesomeIcon icon={faMoneyBillAlt} /> Salary: ${salary}
        </p>
        <button
          onClick={() => props.handleUserAddition(props.user)}
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon={faPlus} /> Add User
        </button>
      </div>
    </div>
  );
};

export default User;
