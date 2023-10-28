import {
  FETCH_ALL_ACAPS_SUCCESS,
  FETCH_CREATE_ACAP,
  FETCH_PUT_ACAP,
  FETCH_DELETE_ACAP,
  FETCH_ACAP_BYNAME,
} from "./actionType";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL;

export function fetchAllAcaps() {
  return async function (dispatch) {
    const re = await axios(`${BASE_URL}/acaps`);
    dispatch({
      type: FETCH_ALL_ACAPS_SUCCESS,
      payload: re.data,
    });
  };
}

export function fetchAcapByName(nombre) {
  return async function (dispatch) {
    const re = await axios(`${BASE_URL}/nombre/search?nombre=${nombre}`);
    dispatch({
      type: FETCH_ACAP_BYNAME,
      payload: re.data,
    });
  };
}

export function fetchDeleteAcap(id) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/despido/${id}`);
    dispatch({
      type: FETCH_DELETE_ACAP,
      payload: id,
    });
  };
}

export function fetchPutAcap(id, newData) {
  return async function (dispatch) {
    const re = await axios.put(`${BASE_URL}/modificar/${id}`, newData);
    dispatch({
      type: FETCH_PUT_ACAP,
      payload: re.data,
    });
  };
}

export function fetchCreateAcap(acapsData) {
  return async function (dispatch) {
    try {
      const formattedData = acapsData.map((item) => {
        return {
          Nombre: item.Nombre,
          Ciudad: item.Ciudad,
          DNI: item.DNI,
          Sanciones: item.Sanciones,
          FotocopiaDni: item.FotocopiaDni,
          RNR: item.RNR,
          AntecedentePenal: item.AntecedentePenal,
          AptoPsicologico: item.AptoPsicologico,
          Habilitado: item.Habilitado,
          Credencial: item.Credencial,
        };
      });

      const re = await axios.post(`${BASE_URL}/create`, formattedData);

      dispatch({
        type: FETCH_CREATE_ACAP,
        payload: re.data,
      });
    } catch (error) {
      console.error("Error al crear AcapSanMs:", error);
    }
  };
}
