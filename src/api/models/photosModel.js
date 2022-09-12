export const Photos = {
  photoID: Number,
  frontView: String,
  leftProfile: String,
  rightProfile: String,
  suspectID: Number,
  asylumSeekerID: Number,
  name: String,
  cprNumber: Number,
  currentAddress: String,
  physicalDesc: [
    {
      race: String,
      age: Number,
      height: String,
      Weight: String,
      eyeColour: String,
    },
  ],
  crimeType: String,
  caseNumber: Number, 
  reviewStatus: ['notReviewed', 'underReview', 'Reviewed'],
  photoUploaderType: ['policeOfficer', 'asylumEmployee'],
  photoDuration: String,
  hasRoles: ['policeOfficer', 'nationalPolice', 'asylumEmployee']
};


