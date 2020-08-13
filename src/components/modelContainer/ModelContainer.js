import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from './../../actions/rootActions'
import PostNowModel from './../models/PostNowModel'
const ModalContainer=(props)=>{

    return props.modalState? <PostNowModel hideModal={props.hideModal}/>:null
}

const mapDispatchToProps = dispatch => ({
    hideModal: (obj) => dispatch(hideModal(obj)),
    // showModal: (obj) => dispatch(showModal(obj)),
    
})
const mapStateToProps = state => ({
    modalState:state.modalState,
    // modalDetails:state.modalDetails
})

export default connect(mapStateToProps)(ModalContainer) 