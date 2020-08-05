import { appID, apiKey, endPoint } from "./config";

const headers = {
  "Content-Type": "application/json",
  "X-Parse-Application-Id": appID,
  "X-Parse-REST-API-Key": apiKey,
};

//API
export const readData = dataClassName => {
  return new Promise((resolve, reject) => {
    fetch(endPoint, {
      method: "GET",
      headers: headers,
    })
      .then(res => res.json())
      .then(res => {
        console.log("RES: ", res);
        resolve(res.results);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

export const writeData = (dataClassName, dataToPush) => {
  return new Promise((resolve, reject) => {
    fetch(endPoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(dataToPush),
    })
      .then(res => res.json())
      .then(res => {
        console.log("RES: ", res);
        resolve(res);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

export const deleteData = (dataClassName, objectId) => {
  return new Promise((resolve, reject) => {
    fetch(`${endPoint}/${objectId}`, {
      method: "DELETE",
      headers: headers,
    })
      .then(res => res.json())
      .then(res => {
        console.log("RES: ", res);
        resolve(res);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

//my custom functions
export const capitalizeFirstLetter = tech => {
  return tech.charAt(0).toUpperCase() + tech.slice(1);
};
