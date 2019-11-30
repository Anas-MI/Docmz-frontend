import { SET_NOTIFICATION } from "../type";
// import { getDoctorsList } from '../../api'
import { notification } from 'antd';

export const getNotifications = () => dispatch => {
   
    const args = {
        message: 'Notification Titlea',
        description:
          'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0,
      };
    //   notification.open(args);
    dispatch({
                    type: SET_NOTIFICATION,
                    payload: notification.open(args)
                })
    // getDoctorsList().then(res => {
    //     console.log('doctorres',res)
    //     if(res.data && res.data.data){
    //         dispatch({
    //             type: SET_DOCTORS,
    //             payload: res.data.data
    //         })
    //     }
    // })
}