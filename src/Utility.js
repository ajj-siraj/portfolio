import { appID, apiKey, endPoint } from "./config";

const headers = {
  "Content-Type": "application/json",
  "X-Parse-Application-Id": appID,
  "X-Parse-Client-Key": apiKey,
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

export const writeData = (dataClassName, dataToPush, masterKey) => {
  return new Promise((resolve, reject) => {
    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Parse-Application-Id": appID,
        "X-Parse-Master-Key": masterKey,
      },
      body: JSON.stringify(dataToPush),
    })
      .then(res => res.json())
      .then(res => {
        if(res.error){
          reject(res.error);
          return;
        }
        console.log("RES: ", res);
        resolve(res);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

export const deleteData = (dataClassName, objectId, masterKey) => {
  return new Promise((resolve, reject) => {
    fetch(`${endPoint}/${objectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-Parse-Application-Id": appID,
        "X-Parse-Master-Key": masterKey,
      },
    })
      .then(res => res.json())
      .then(res => {
        if(res.error){
          reject(res.error);
          return;
        }
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
