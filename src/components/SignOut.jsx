import { auth } from "../services/firebase";

const SignOut = () => {
  return (
    auth().currentUser && (
      <button onClick={() => auth().signOut()}>Se déconnecter</button>
    )
  );
};

export default SignOut;
