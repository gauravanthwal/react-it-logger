import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techAction";

const TechSelectOption = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((t) => {
      return (
        <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
          {t.firstName}
          {t.lastName}
        </option>
      );
    })
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, {getTechs})(TechSelectOption);
