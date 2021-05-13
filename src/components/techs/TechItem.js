import React from 'react'
import {connect } from 'react-redux'
import { deleteTech} from '../../actions/techAction'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ tech, deleteTech }) => {
    const removeTech = () =>{
        deleteTech(tech.id)
        M.toast({html: `${tech.firstName} removed from tech list`})
    }
    return (
        <li className="collection-item">
            <div>{tech.firstName} {tech.lastName}
                <a href="#!" className='secondary-content' onClick={removeTech}> 
                <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null, {deleteTech})(TechItem)
