import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/stuffs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allStuffObj = result.data;
      const stuffs = [];
      if (allStuffObj != null) {
        Object.keys(allStuffObj).forEach((stuffId) => {
          const newStuff = allStuffObj[stuffId];
          newStuff.id = stuffId;
          stuffs.push(newStuff);
        });
      }
      resolve(stuffs);
    })
    .catch((err) => {
      reject(err);
    });
});

const deleteItem = (stuffId) => axios.delete(`${baseUrl}/stuffs/${stuffId}.json`);

const getSingleItem = (stuffId) => axios.get(`${baseUrl}/stuffs/${stuffId}.json`);

const saveItem = (stuffInfo) => axios.post(`${baseUrl}/stuffs.json`, stuffInfo);

const updateItem = (stuffId, newStuffInfo) => axios.put(`${baseUrl}/stuffs/${stuffId}.json`, newStuffInfo);

export default {
  getStuffByUid,
  getSingleItem,
  saveItem,
  updateItem,
  deleteItem,
};
