import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2GyUTmQM5V5BWRnuK0rj6y64fMXGD4Ew",
    authDomain: "vaccine-survey.firebaseapp.com",
    projectId: "vaccine-survey",
    storageBucket: "vaccine-survey.appspot.com",
    messagingSenderId: "1036291099882",
    appId: "1:1036291099882:web:6a9adfdec75966f6011b93"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;