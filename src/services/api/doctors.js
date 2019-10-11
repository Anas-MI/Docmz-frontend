import axios from "axios";
import { baseUrl } from "../../constants/constants";

export const getDoctorsList = () => axios.get(`${baseUrl}/doctors/get`)
