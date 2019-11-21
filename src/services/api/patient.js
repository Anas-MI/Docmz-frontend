import axios from "axios";
import { baseUrl } from "../../constants/constants";

export const patientRegistration = (data) => axios.post(`${baseUrl}/patient/register`,data)

export const patientCardSave = (data) => axios.post(`${baseUrl}/stripe/create/card/profile`,data)
export const patientCardStripeCharge = (data) => axios.post(`${baseUrl}/stripe/charge/card`,data)
export const patientCardTestDetails = (data) => axios.post(`${baseUrl}/stripe/testcard`,data)
// export const patientCardList = (customerKey) => axios.get(`${baseUrl}/stripe/list/${customerKey}`)
export const patientCardList = (customerKey) => axios.get(`${baseUrl}/stripe/list/${localStorage.getItem('customerProfile')}`)
