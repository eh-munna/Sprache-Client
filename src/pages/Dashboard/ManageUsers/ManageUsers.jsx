import useTitleChange from '../../../TitleChange/TitleChange';
import useLoadUsers from '../../../hooks/useLoadUsers';
import UsersRow from '../UsersRow/UsersRow';

const ManageUsers = () => {
  useTitleChange('Sprache | Users');
  const [users, refetch] = useLoadUsers();

  return (
    <div className="">
      <h2 className="font-[archivo] text-center text-2xl text-[#5a189a] font-bold">
        Total users : {users.length}
      </h2>

      <div className="grid grid-cols-4 pt-6 gap-3 justify-center items-center">
        <div className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase ">
          #
        </div>
        <div className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase ">
          Name
        </div>
        <div className="font-[arichivo] font-bold text-[#5a189a] text-lg uppercase col-span-2 text-center">
          Role
        </div>
      </div>
      <div>
        {users.map((user, idx) => (
          <UsersRow idx={idx} key={user._id} user={user} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
