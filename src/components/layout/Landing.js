import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Employee Portal</h1>
          <p className="lead">Welcome to employee portal</p>
          {!isAuthenticated ? (
            <div className="buttons">
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
