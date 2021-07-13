import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB9oWBUfy2xV8if9u9q7wFGVyEVM3sL9UM',
  authDomain: 'whatsapp-clone-15d47.firebaseapp.com',
  projectId: 'whatsapp-clone-15d47',
  storageBucket: 'whatsapp-clone-15d47.appspot.com',
  messagingSenderId: '622345384768',
  appId: '1:622345384768:web:9e22efaa60a2c3790fc0a5',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
