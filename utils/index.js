const convertDateToStr = (date) => new Date(date).toDateString();


const convertStrToDate = (date) => new Date(date); 


module.exports = {
    convertDateToStr,
    convertStrToDate
}