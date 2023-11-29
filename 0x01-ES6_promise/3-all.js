import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()]).then((val) => {
    console.log(
      `${val[1].body} ${val[0].firstName} ${val[0].lastName}`,
    );
  }).catch(() => {
    console.log('Signup system offline');
  });
}
