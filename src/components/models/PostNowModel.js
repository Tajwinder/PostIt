 import React from 'react'
import styles from './PostNowModel.module.css'
import {connect} from 'react-redux';

import { hideModal } from '../../actions/rootActions'

 const PostNowModel=(props)=>{

    const hideModalHandler=()=>{
        props.hideModal();
    }
    return(
        <div className={styles.outerContainer} >
             <button type="button" class="close" aria-label="Close" onClick={()=>hideModalHandler()} style={{color:"red"}}>
        <span aria-hidden="true">&times;</span>
        </button>
            <div className={styles.innerContainer}>
            <textarea rows = "5" cols = "60" name = "post" className={styles.post}>
            What would like to share?
         </textarea><br/>
        
                {/* <button className="btn " >close</button> */}
                <button className="btn btn-primary " style={{marginLeft:450}}>schedule</button> 
        
            </div>
        </div>
    )
 }

 const mapDispatchToProps = dispatch => ({
    hideModal: (obj) => dispatch(hideModal(obj)),
    // showModal: (obj) => dispatch(showModal(obj)),
    
})
const mapStateToProps = state => ({
    // modalState:state.modalState,
    // modalDetails:state.modalDetails
})

export default connect(mapStateToProps,mapDispatchToProps)(PostNowModel) 
// export default PostNowModel;