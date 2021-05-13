import React,{ useEffect} from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layouts/Preloader'
import {getLogs } from '../../actions/logAction'


const Loggs = ({logs, loading, getLogs}) => {
    

    useEffect(()=>{
        getLogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   
    if(loading || logs == null){
        return <Preloader/>
    }
 
    return (
        <ul className='collection with-header'>
            <li className="collection-header">
                <h4 className="center">System logs</h4>
            </li>
            {!loading && logs.length === 0 ? <p className='center'>No loggs to show</p> :
            logs.map((log)=> <LogItem log={log} key={log.id}/> ) }
        </ul>
    )
}

const mapStateToProps = (state) => ({
    logs: state.log.logs,
    loading: state.log.loading

})

export default connect(mapStateToProps, { getLogs})(Loggs)
