
import './App.css'
import { Landing } from './components/Landing'
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { userAtom } from './Store/atoms/user';



const firebaseConfig = {
  apiKey: "AIzaSyACn8W1_EKTVNGN7_SOyyJcNSSSVc1zmvw",
  authDomain: "leetcode-clone-2cac1.firebaseapp.com",
  projectId: "leetcode-clone-2cac1",
  storageBucket: "leetcode-clone-2cac1.appspot.com",
  messagingSenderId: "665472691830",
  appId: "1:665472691830:web:ff859d37c405658b36f957",
  measurementId: "G-Y6DG04W2B4"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app)
function App() {
  return <RecoilRoot>
    <StoreApp />
  </RecoilRoot>
} 

function StoreApp(){
  const [ user , setUser ] = useRecoilState(userAtom);

  useEffect(() => {
    onAuthStateChanged(auth, function(user) {
      if(user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email
          }
        })

        }else{
        setUser({
          loading: false,
        })
        // no user os signed in
        console.log("There is no logged in user")
      }
    });
  }, [])
  if(user.loading){
    return<div>loading....</div>
  }
  if(!user){
    return<div><Signin /></div>
  }

  return (
    <>
      You are logged in as {user.user?.email}
    </>
  )
}

export default App
