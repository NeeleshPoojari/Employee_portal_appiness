import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profiles";
import ProfileItem from "./ProfileItem";

const Profiles = ({ profiles: { profiles, loading }, getProfiles }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <h1 className="large text-primary">Employee List</h1>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile.id} profile={profile} />
              ))
            ) : (
              <h1>No profile found</h1>
            )}
          </div>
        </Fragment>
      ) : (
        <p>Loading</p>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  profiles: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
