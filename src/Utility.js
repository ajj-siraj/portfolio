import Parse from "parse";

//API
export const readData = dataClassName => {
  Parse.serverURL = "https://parseapi.back4app.com";
  Parse.initialize(process.env.b4aID, process.env.apiKey);

  return new Promise((resolve, reject) => {
    const dataClass = Parse.Object.extend(dataClassName);
    const query = new Parse.Query(dataClass);
    query
      .find()
      .then(res => JSON.stringify(res))
      .then(
        results => {
          console.log("ParseObjects found:", results);
          resolve(results);
        },
        error => {
          console.error("Error while fetching ParseObjects", error);
          reject(error);
        }
      );
  });
};

export const writeData = (dataClassName, dataToPush) => {
  Parse.serverURL = "https://parseapi.back4app.com";
  Parse.initialize(process.env.b4aID, process.env.apiKey);

  return new Promise((resolve, reject) => {
    const dataClass = Parse.Object.extend(dataClassName);
    const obj = new dataClass();

    const dataKeys = Object.keys(dataToPush);
    const dataValues = Object.values(dataToPush);

    dataValues.forEach((value, idx) => {
      obj.set(dataKeys[idx].toString(), value);
    })

    obj.save().then(
      result => {
        console.log("ParseObject created", result);
        resolve(result);
      },
      error => {
        console.error("Error while creating ParseObject: ", error);
        reject(error);
      }
    );
  });
};

export const deleteData = () => {};

//my custom functions
export const capitalizeFirstLetter = tech => {
  return tech.charAt(0).toUpperCase() + tech.slice(1);
};
