import axios from "axios";
import MetPhotoApi from "./api/photoLibrary/photoLib";
import { Photos } from "./api/models/photosModel";

export class MetPolicePhotoLibrary {
  constructor(apiKey) {
    this.api = apiKey;
    this.metPhotoModel = Photos;
    this.metPhotoApi = new MetPhotoApi(this);
  }

  async send(method, path, body) {
    try {
      const result = await axios({
        method: method,
        url: path,
        data: body ? body : undefined,
        headers: {
          Authorization: this.apiKey,
          contentType: "application/json",
        },
        timeout: 10000,
      });

      return result;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
}

const callPhotoApi = new MetPolicePhotoLibrary(
  "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
);

const photoID = 123;
const suspectID = 120;

const getPhoto = await callPhotoApi.metPhotoApi.getSuspectPhoto(
  photoID,
  suspectID
);

console.log(getPhoto);
