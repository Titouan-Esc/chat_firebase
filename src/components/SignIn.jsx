import { auth } from "../services/firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Se connecter avec google</button>;
};

export default SignIn;
