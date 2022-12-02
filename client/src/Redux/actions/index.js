import axios from 'axios';
import { GET_COUNTRIES, GET_MATCHS_FROM_GROUP, GET_MATCHS_FROM_GROUPS, GET_PRODE, UPDATE_PRODE, GET_PRODE_POINTS, GET_MATCHS_FROM_PLAYOFF } from '../consts';


export function getCountries() {
    return async function (dispatch) {
        let json = await axios.get("/country/get_all")
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

export function getMatchsFromGroups() {
    return async function (dispatch) {
        let json = await axios.get("/match/get_all_from_groups")
        return dispatch({
            type: GET_MATCHS_FROM_GROUPS,
            payload: json.data
        })
    }
}

export function getMatchsFromGroup(group) {
    return async function (dispatch) {
        let json = await axios.get("/match/get_group/" + group)
        return dispatch({
            type: GET_MATCHS_FROM_GROUP,
            payload: json.data
        })
    }
}

export function chequearEmail(email, picture, name) {
    return async function (dispatch) {
        let json = await axios.get("/user/chequear_user/?email=" + email + "&picture=" + picture + "&name=" + name)
        return dispatch({
            type: "CHEQUEAR_USER",
            payload: json.data
        })
    }
}

export function updateProde(email, matchId, result) {
    return async function (dispatch) {
        let json = await axios.post("/user/update_prode/" + email, {matchId, result})
        return dispatch({
            type: UPDATE_PRODE,
            payload: json.data
        })
    }
}

export function getProde(email){
    return async function (dispatch) {
        let json = await axios.get("/user/get_prode/" + email)
        return dispatch({
            type: GET_PRODE,
            payload: json.data
        })
    }
}

export function getProdePoints(){
    return async function (dispatch) {
        let json = await axios.get("/user/prode_points")
        return dispatch({
            type: GET_PRODE_POINTS,
            payload: json.data
        })
    }
}

export function getMatchsFromPlayoff() {
    return async function (dispatch) {
        let json = await axios.get("/match/get_all_from_playoff")
        return dispatch({
            type: GET_MATCHS_FROM_PLAYOFF,
            payload: json.data
        })
    }
}