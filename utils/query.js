const mongoose = require("mongoose");
const { convertStrToDate } = require(".");

const constructDateQuery = (condition, dateStr) => {
  const date = convertStrToDate(dateStr);
  console.log({ date })
  return{
    [condition]: ['$$this.date', date]
  }
}

const constructFromToQuery = (from, to) => {
  let fromToQuery = {};
  if(from){
    fromQuery = constructDateQuery('$gte', from);
  }
  if(to){
    toQuery = constructDateQuery('$lte', to);
  }

  if(from && to){ // Provide $and
    fromToQuery = {
      '$and': [fromQuery, toQuery]
    }
  }
  else{
    if(from){
      fromToQuery = fromQuery;
    }
    if(to){
      fromToQuery = toQuery;
    }
  }
  return fromToQuery;
}

const getQueries = (query = {}, userId) => {
  const { limit, from, to } = query;
  const dbQuery = [
    {
      "$match": {
        "_id": {
          "$eq": new mongoose.Types.ObjectId(userId)
        }
      }
    }
  ]
  if(Object.keys(query).length !== 0) {
    let fromToQuery = {};
    if(from || to) {
      fromToQuery = constructFromToQuery(from, to);
    }

    let filterQuery = {
      '$filter': {
        'input': '$log',
        'cond': fromToQuery
      }
    };
    
    let setQuery;
    if(limit){
      setQuery = {
        '$slice': [filterQuery, Number(limit)]
      }
    }
    else{
      setQuery = filterQuery;
    }
    dbQuery.push({
      '$set': {
        log: setQuery
      }
    })
  }
  return dbQuery;
}
// const dateStr = '11-12-2020';
// const from = dateStr;
// const to = dateStr;
// const limit = 5;
// getQueries({ from }) // from only
// getQueries({ to }) // to only
// getQueries({ limit }) // limit only

// getQueries({ from, to }) // from,to only
// getQueries({ from, limit }) // from, limit only

// getQueries({ to, limit }) // to, limit only

// getQueries({ to, from, limit }) // from, to limit


module.exports = {
  getQueries
}