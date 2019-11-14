import axios from "axios";
import { baseUrl } from "../../constants/constants";

export const patientRegistration = (data) => axios.post(`${baseUrl}/patient/register`,data)
