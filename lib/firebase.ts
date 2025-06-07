import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// Firebase is already initialized by the native code through 
// google-services.json and GoogleService-Info.plist
// We just need to access the default app instance

// Get the already initialized default app
const app = firebase.app();

export { app, auth, firestore, storage };