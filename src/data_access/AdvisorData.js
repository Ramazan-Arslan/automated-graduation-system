import React from 'react';
import getRequestAGS from '../server_connections/AGS/getRequestAGS';
import postRequestAGS from '../server_connections/AGS/postRequestAGS';

export default class AdvisorData extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {};

    componentDidMount() {
    }


    requestAdvisorsData = async (department) => {

        var json = 
        {
            department : department
        }
        
        var path = ('/advisorData/requestAdvisorsData');
        var obj = await postRequestAGS(path,json);
        return obj.returned;

    }

    requestProposals = async (advisorId) => {
        var json = 
        {
            advisorId : advisorId
        }
        
        var path = ('/advisorData/requestProposals');
        var obj = await postRequestAGS(path,json);
        return obj.returned;
    }

    requestDecidedProposals = async (advisorId) => {
        var json = 
        {
            advisorId : advisorId
        }
        
        var path = ('/advisorData/requestDecidedProposals');
        var obj = await postRequestAGS(path,json);
        return obj.returned;
    }

    
    adjustAdvisorProposalDecisions = async (advisorId, acceptedList, rejectedList) => {
        var json = 
        {
            advisorId : advisorId,
            acceptedList: acceptedList,
            rejectedList : rejectedList
        }
        
        var path = ('/advisorData/adjustAdvisorProposalDecisions');
        var obj = await postRequestAGS(path,json);
        return obj.returned;
    }


    render() {
        return null;
    }
}

