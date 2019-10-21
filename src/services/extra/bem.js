export const getVersions = (version, component = "") => {
    if(version){
        if(typeof version === "string")
            return `${component}--${version}`
        if(version.constructor === Array)
            return version.map(el => el && `${component}--${el}`).filter(el => el).join(" ")
    }
    return " "
}