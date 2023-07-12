import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import { fetch_user } from '../actions';
import { AuthState } from '../actions/types';
import { RootState } from '../reducers';

interface Props {
fetch_user():any;
auth:AuthState;

}
const LoginStatus=(props:Props):JSX.Element=>{
    console.log(props.auth);
    useEffect(()=>{
        props.fetch_user();
    },[])
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}
const mapStateToProps=({auth}:RootState):{auth:AuthState}=>{
   return {auth}
}


export default connect(mapStateToProps,{fetch_user})(LoginStatus);