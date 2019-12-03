import { email , password , name , fullName } from "./regex";
export const validations = (value, validate ,Name = "field") => {
    if(validate){
        if('required' === validate && value){
            value=value.trim()
            if(value.length>=1) {
                return {
                    error: false,
                    errMsg: ""
                }
              } else {
                return {
                    error: true,
                    errMsg: Name + " is required !"
                }
              }
        }
        if('email' === validate){
            
               if(email.test(value)) {
                    return {
                        error: false,
                        errMsg: ""
                    }
                  } else {
                    return {
                        error: true,
                        errMsg: "Email Id is not valid"
                    }
                  }
           
        }
        if('password' === validate){
             if(password.test(value)) {
                return {
                    error: false,
                    errMsg: ""
                }
              } else {
                return {
                    error: true,
                    errMsg: "A  password contains a combination of uppercase, lowercase , special characters and number letter"
                }
              }
        }
         if('name' === validate){
            if(name.test(value)) {
                return {
                    error: false,
                    errMsg: ""
                }
              } else {
                return {
                    error: true,
                    errMsg: "Not Valid"
                }
              }
        }
        if('full_name' === validate){
            if(fullName.test(value)) {
                return {
                    error: false,
                    errMsg: ""
                }
              } else {
                return {
                    error: true,
                    errMsg: "Not Valid"
                }
              }
        }
      
    }
    return {
        error: false,
        errMsg: ""
    }
}