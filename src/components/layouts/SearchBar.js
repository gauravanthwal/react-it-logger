import React, {useRef} from 'react'
import {connect} from 'react-redux'
import { searchLog} from '../../actions/logAction'

const SearchBar = ({ searchLog}) => {
  const text = useRef('')

  const onChange = () =>{
    searchLog(text.current.value)
  }
    return (
    <nav style={{ marginBottom: '30px'}} className='blue'>
    <div className="nav-wrapper">
      <htmlForm>
        <div className="input-field">
          <input id="search" type="search" ref={text} placeholder='Search Logs...' onChange={onChange}/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </htmlForm>
    </div>
  </nav>
    )
}

export default connect(null, { searchLog})(SearchBar)
