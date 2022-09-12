import { Suspect } from "./suspectModel";

export const CrimeCase = {
    crimeID: Number,
    crimeName: String,
    crimeType: String,
    crimeDate: Number,
    crimeSuspect: Suspect,
    crimePhotos: String
}