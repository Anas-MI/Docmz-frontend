export const email= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
export const name = /[^a-zA-Z]/g
export const fullName= /[^a-zA-Z ]/g
export const onlyNumber= /[^0-9]/g
export const zipcode= /[^a-zA-Z0-9 ]/g
export const fullname= /[^a-zA-Z ]/g

export const cards = {
    american    : /^3[47]\\d{0,13}/,
    discover    :/^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}/,
    diners      : /^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}/,
    mastercard  : /^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}/,
    jcb15       : /^(?:2131|1800)\\d{0,11}/ ,
    jcb         : /^(?:35\\d{0,2})\\d{0,12}/
}

