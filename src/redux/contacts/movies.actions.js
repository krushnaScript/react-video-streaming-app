import Axios from "axios";

import {
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_SERIES_REQUEST,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE
} from "./movies.actionTypes";


let fetchMovies = () => {
    return (dispatch) => {
        dispatch({type : FETCH_MOVIES_REQUEST});
        let dataURL = `https://gist.githubusercontent.com/krushnachandradash654/f3ede7cc6fda4a2866833848e13a4d32/raw/469c38e0d8e20e44c210d31ff7974f11ccc7bca8/video-stream`;
        Axios.get(dataURL).then((response) => {
           let allMovies=response.data;
           let movies = allMovies.filter((movie) => {
            return movie.programType === "movie"
            });
            dispatch({type : FETCH_MOVIES_SUCCESS , payload :movies})
        }).catch((error) => {
            dispatch({type : FETCH_MOVIES_FAILURE , payload : error})
        });
    }
};


let fetchSeries = () => {
    return (dispatch) => {
        dispatch({type :FETCH_SERIES_REQUEST});
        let dataURL = `https://gist.githubusercontent.com/krushnachandradash654/f3ede7cc6fda4a2866833848e13a4d32/raw/469c38e0d8e20e44c210d31ff7974f11ccc7bca8/video-stream`;
        Axios.get(dataURL).then((response) => {
           let allMovies=response.data;
           let series = allMovies.filter((serie) => {
            return serie.programType === "series"
            });
            dispatch({type : FETCH_SERIES_SUCCESS , payload :series})
        }).catch((error) => {
            dispatch({type : FETCH_SERIES_FAILURE , payload : error})
        });
    }
};


export {fetchMovies,fetchSeries};
