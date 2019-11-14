import axios from "axios";
import { baseUrl } from "../../constants/constants";

export const saveTimeSlots = data => axios.post(`${baseUrl}/doctors/saveslots`, {
    ...data
})
