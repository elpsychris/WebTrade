import * as webapi from '../api/web_service_api'
import * as ACTION from '../api/action_name'
import {AtmosphereAPI} from '../api/AtmosphereAPI';
const {ActionTypes} = require('../core/constants');

function responseOrderHistory(response) {
  	return {
    	type: ActionTypes.ENQUIRYORDERHISTORY,
    	data: response
	}
}

export function enquiryOrderHistory(params, page) {
	if (params.mvBS === "ALL") {
		params.mvBS = 'A'
	}
	return (dispatch) => {
		webapi.post(ACTION.ENQUIRYHISTORYORDER, params, dispatch, responseOrderHistory)
	}
}
function responseExportExcel() {
    return {
        type: ActionTypes.EXPORTORDERHISTORY,
    }
}

export function exportOrderHistory(params) {
    return (dispatch)=>{
        webapi.report(ACTION.EXPORTORDERHISTORY, params, dispatch, responseExportExcel)
    }
}

//--------------------------------DAOTUAN	
export function loadOrderHistoryRealtime(params, page){
	if(params.mvBS === "ALL"){
		params.mvBS = 'A'
	}
	return (dispatch) => {
		AtmosphereAPI('ORDERHISTORY', dispatch, responseLoadOrderHistoryRealtime)
	}
}

function responseLoadOrderHistoryRealtime(response){
	return{
		type: ActionTypes.LOADORDERHISTORYREALTIME,
		data: response
	}
}

