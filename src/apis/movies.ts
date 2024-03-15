import Axios from "axios";
import {
  ICreateMovieParams,
  IDeleteMovieParams,
  IUpdateMovieParams,
} from "../models/movies";

const urlBase = "http://localhost:3001/movies";

export const getMoviesApi = async () => {
  const response = await Axios.get(`${urlBase}`);
  return response.data;
};

export const deleteMovieApi = async (params: IDeleteMovieParams) => {
  const { id } = params;
  const response = await Axios.delete(`${urlBase}/${id}`);
  return response.data;
};

export const createMovieApi = async (params: ICreateMovieParams) => {
  const response = await Axios.post(`${urlBase}`, params);
  return response.data;
};

export const updateMovieApi = async (params: IUpdateMovieParams) => {
  const { id } = params;
  const response = await Axios.patch(`${urlBase}/${id}`, params);
  return response.data;
};
