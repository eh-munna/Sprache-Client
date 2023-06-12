import { useState } from 'react';
import useLoadUsers from '../../hooks/useLoadUsers';

const Home = () => {
  const [isBtnDisabled, setBtnDisabled] = useState(false);
  // const [users] = useLoadUsers();
  // console.log(users);

  // // if (user.adminRole === true) {
  // //   setBtnDisabled(true);
  // // }

  // const tryingg = users.map((user) => {
  //   if (user.adminRole) {
  //     setBtnDisabled(true);
  //     return user.adminRole;
  //   }
  // });

  const test = () => {
    console.log(`button is not disabled`);
  };

  return (
    <div>
      <button onClick={test} className="border p-3" disabled={isBtnDisabled}>
        Test Button
      </button>
    </div>
  );
};

export default Home;
