import React, {  useEffect } from "react";
import TechItem from './TechItem'
import {connect} from 'react-redux'
import { getTechs } from '../../actions/techAction'

const TechListModal = ({ getTechs, loading, techs }) => {

  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicial List</h4>
        <ul className="collection">
          {!loading && techs !== null &&
            techs.map((tech) => (
              <TechItem tech={tech} key={tech.id}/>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading
})

export default connect(mapStateToProps, {getTechs})(TechListModal);
