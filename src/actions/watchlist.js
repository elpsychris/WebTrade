import * as api from '../api/web_service_api'
import * as ACTION from '../api/action_name'
import {FetchAPI, POST, PUT, GET, LOGIN, DELETE} from '../api/fetchAPI';
import {AtmosphereAPI} from '../api/AtmosphereAPI';
const {ActionTypes} = require('../core/constants');

const watchlist = [{"mvStockCode":"ACB","mvMarketID":"HA", "mvCeilingPrice":18.3, "mvStockName":"Ngân hàng Thương mại Cổ phần Á Châu"}]

export function loadWatchList(params) {
  return (dispatch)=>{
    api.get(ACTION.GETMARKETDATA,params,dispatch,responseGetMarketData)
  }
}
function responseGetMarketData(response){
  console.log("watchListData ",response)
  return {
      type: ActionTypes.LOADWATCHLIST,
      watchListData: watchlist,
  }
}
 
export function addStock(params) {
  return (dispatch)=>{
    api.get(ACTION.ADDORREMOVEACTION,params,dispatch,responseAddStock)
  }
}

function responseAddStock(response){
  console.log("watchListData ",response)
  return {
      type: ActionTypes.ADDSTOCK,
      watchListData: response,
  }
}


export function removeStock(params) {
  console.log("param dcgoila: ",params)
  return (dispatch)=>{
    api.get(ACTION.ADDORREMOVEACTION,params,dispatch,responseRemoveStock)
  }
}
function responseRemoveStock(response){
  console.log("watchListData ",response)
  return {
      type: ActionTypes.REMOVESTOCK,
      watchListData: response,
  }
}


//-------------------------------------------DAOTUAN
export function loadWatchListRealtime() {
  console.log('WATCHLIST_REALTIME');
  return (dispatch)=>{
    AtmosphereAPI('WATCHLIST', dispatch, responseWatchListRealtime);
  }
}
function responseWatchListRealtime(response){
  console.log("REALTIME ", response)
  return {
    type: ActionTypes.LOADWATCHLISTREALTIME,
    watchListData: response,
  }
}
