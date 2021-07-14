import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './Login'
import { auth, db } from '../firebase'
import firebase from 'firebase'
import Loading from '../components/Loading'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  //  retrive-monitor the authentication from firebase
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    // saves users info
    if (user) {
      db.collection('users').doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoUrl: user.photoURL,
        },
        { merge: true },
      )
    }
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />
  return <Component {...pageProps} />
}

export default MyApp
