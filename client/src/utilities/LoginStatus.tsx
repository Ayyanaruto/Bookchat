import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import { fetch_user } from '../actions';
import { AuthState } from '../actions/types';
import { RootState } from '../reducers';
import Modal from './Modal';

interface Props {
fetch_user():any;
auth:AuthState;
children:React.ReactElement;
}

const renderLogin:(auth:AuthState,children:React.ReactElement)=>JSX.Element=(auth,children)=>{

    if(auth.isLoading){
        return <div>Loading...</div>
    }else if(auth.error){
        return <div>{auth.error}</div>
    }else if(auth.user){
       
    return (
        React.cloneElement(children,{user:auth.user}) 
    )
    }else{
        return <div><Modal/></div>
    }}


const LoginStatus=({auth,fetch_user,children}:Props):JSX.Element=>{
    useEffect(()=>{
        fetch_user();
    },[])
    return (
        <div>
            {renderLogin(auth,children)}
        </div>
    )
}
const mapStateToProps=({auth}:RootState):{auth:AuthState}=>{
   return {auth}
}


export default connect(mapStateToProps,{fetch_user})(LoginStatus);