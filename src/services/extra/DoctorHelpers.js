export const getValidValue = value => (value && value.trim() !== "" && value.trim() !== "not found") ? value : ""

export const getName = doctor => {
  const {
    basic
  } = doctor
  if (!basic)
    return "No Name"

  const {
    name_prefix,
    name,
    credential
  } = basic
  const nameVal = getValidValue(name)
  const name_prefixVal = getValidValue(name_prefix)
  const credentialVal = getValidValue(credential)

  const wholeName = `${name_prefixVal} ${nameVal}  ${credentialVal}`

  if (wholeName.trim() === "")
    return "No Name"

  return wholeName
}

export const getSlug = doctor => {
  const {
    basic
  } = doctor
  if (!basic)
    return "no-slug"

  const {
    name_prefix,
    name,
    credential
  } = basic
  var nameVal = getValidValue(name);
  nameVal = nameVal.replace(" ", "-");
  const wholeName = `${nameVal}`
  
  if (wholeName.trim() === "")
    return "No Name"

  return wholeName
}



export const getAddress = doctor => {
  const {
    address
  } = doctor
  if (!address)
    return ""
  if (address.length < 1)
    return ""

  const {
    address_1,
    address_2,
    city,
    country_name,
    postal_code,
    telephone_number
  } = address[0]
  const address_1Val = getValidValue(address_1)
  const address_2Val = getValidValue(address_2)
  const cityVal = getValidValue(city)
  const country_nameVal = getValidValue(country_name)
  const postal_codeVal = getValidValue(postal_code)
  const telephone_numberVal = getValidValue(telephone_number)
  const wholeAddress = [
    address_1Val,
    address_2Val,
    cityVal,
    country_nameVal,
    postal_codeVal,
    telephone_numberVal,
  ].filter(el => (el && el.trim() !== "")).join(", ")

  return wholeAddress
}

export const getTaxonomy = doctor => {
  const {
    taxonomies
  } = doctor
  if (!taxonomies )
    return ""
  if(taxonomies.length < 1)
    return ""
  const {
    desc
  } = taxonomies[0]
  return getValidValue(desc)
}


export const removeDublecatVale = (originalArray,key) =>{
  var newArray = [];
     var lookupObject  = {};
     for(var i in originalArray) {
        lookupObject[originalArray[i][key]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
}