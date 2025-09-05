import { initializeApp } from "firebase/app";
import axios from 'axios';
import moment from 'moment'
import CryptoJS from 'crypto-js';

export const initFirebaseApp = async () => {
    try {
        const currentDate = moment().format('YYYY-MM-DD');
        const md5Hash = CryptoJS.MD5(`${window.location.host}${currentDate}firebase`).toString();
        const response = await axios.get(`https://prod-agione-notifier.ozonohosting.com/api/notification/v1/providers/firebase?filter={%22field%22:%20%22system_name%22}&token=${md5Hash}`)
        const json = response.data;
        if (json.errors === 'Unauthorized') {
            return
        }

        const firebaseConfig = {
            apiKey: json.data.fields.firebaseApiKey,
            authDomain: json.data.fields.authDomain,
            projectId: json.data.fields.projectId,
            storageBucket: json.data.fields.storageBucket,
            messagingSenderId: json.data.fields.messagingSenderId,
            appId: json.data.fields.appId,
            measurementId: json.data.fields.measurementId
        }

        const app = initializeApp(firebaseConfig);
        return { app, firebaseWebPushCertificateKeyPair: json.data.fields.firebaseWebPushCertificateKeyPair }
    } catch (err) {
        console.log('Error initializing Firebase', err);
    }
}
