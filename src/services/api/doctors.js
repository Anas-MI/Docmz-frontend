import axios from "axios";
import { baseUrl } from "../../constants/constants";

export const getDoctorsList = () => axios.get(`${baseUrl}/doctors/get`)

export const getDoctorById = id => axios.get(`${baseUrl}/doctors/getdoc/${id}`)

export const getAppointments = ({limit, doctor, date})  => axios.post(`${baseUrl}/appointment/get`, {limit, doctor, date})

export const updateProfile = (data)  => axios.post(`${baseUrl}/doctors/profile/update`, data)