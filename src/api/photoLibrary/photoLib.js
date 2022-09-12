// For simplicity, we are not defining getter and setter functions. The reader can
// assume that all class attributes are private and accessed through their respective
// public getter methods and modified only through their public methods function.

export class MetPhotoApi {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getSuspectPhoto(photoId, suspectId) {
    try {
      await this.apiClient.send(
        "get",
        `results?photoId=${photoId}?suspectId=${suspectId}`
      );

      if (result.photoUploaderType === "asylumEmployee") {
        return console.log("Not Authorized!");
      }

      if ((result.success = true)) {
        return result.data || result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAsylumPhoto(photoId, asylumId) {
    try {
      const result = await this.apiClient.send(
        "GET",
        `results?photoId=${photoId}?asylumId=${asylumId}`
      );
      if ((result.success = true)) {
        return result.data || result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async postCriminalPhoto() {
    const photoData = {
      frontView: new File({
        bits: 4030293923,
        name: "Mike front photo",
        option: {},
      }),
      leftProfile: new File({
        bits: 29200110,
        name: "Mike left photo",
        option: {},
      }),
      rightProfile: new File({
        bits: 1023903,
        name: "Mike right photo",
        option: {},
      }),
      suspectId: 120,
      namae: "Mike",
      cprNumber: 2307891556,
      currentAddress: "10 Downing Street",
      physicalDesc: [
        {
          race: "White",
          age: 34,
          height: "5 ft 11.9",
          weight: "197.9",
          eyeColour: "brown",
        },
      ],
      crimeType: "Shoplifting",
      caseNumber: 32,
      reviewStatus: "Under Review",
      photoUploaderType: "policeOfficer",
      photoDuration: "4 Days",
      hasRoles: "policeOfficer",
    };

    try {
      const result = await this.apiClient.send("POST", `results?photos`, {
        photoData,
      });

      if ((result.success = true)) {
        return result.data || result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async createAsylumSeeker() {
    const photoData = {
      frontView: new File({
        bits: 4030293923,
        name: "Craig front photo",
        option: {},
      }),
      leftProfile: new File({
        bits: 29200110,
        name: "Craig left photo",
        option: {},
      }),
      rightProfile: new File({
        bits: 1023903,
        name: "Craig right photo",
        option: {},
      }),
      asylumSeekerID: 120,
      name: "Craig",
      photoUploaderType: "asylumEmployee",
      hasRoles: "asylumEmployee",
    };

    try {
      const result = await this.apiClient.send("POST", `results?photos`, {
        photoData,
      });

      if ((result.success = true)) {
        return result.data || result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteSuspectPhoto(photoId) {
    try {
      const result = await this.apiClient.send(
        "DELETE",
        `results?photoId=${photoId}`
      );

      if ((result.success = true)) {
        return result.data || result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteAsylumPhoto(photoId) {
    try {
      const result = await this.apiClient.send(
        "DELETE",
        `results?photoId=${photoId}`
      );

      if ((result.success = true)) {
        return result.data || result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateSuspectPhoto(photoId) {
    const data = {
      photoStatus: "Reviewed",
    };
    try {
      const result = await this.apiClient.send(
        "PUT",
        `results?photoId=${photoId}`,
        data
      );

      if ((result.success = true)) {
        return result.data || result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
