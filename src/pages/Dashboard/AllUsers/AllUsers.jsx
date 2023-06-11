import useLoadUsers from '../../../hooks/useLoadUsers';
import UsersRow from '../UsersRow/UsersRow';

const AllUsers = () => {
  const [users, refetch] = useLoadUsers();

  return (
    <div className="">
      <h2 className="text-xl text-center">Total users : </h2>
      {/* <h2 className="text-xl text-center">Total users : {users.length}</h2> */}

      <div className="grid grid-cols-5 pt-6 justify-center items-center">
        <div>Sl</div>
        <div>Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Action</div>
      </div>
      <div>
        {users.map((user, idx) => (
          <UsersRow idx={idx} key={user._id} user={user} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
