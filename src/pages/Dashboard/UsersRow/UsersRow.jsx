const UsersRow = ({ user, idx, refetch }) => {
  const { _id, name, email, role } = user;

  // const addAdmin = (id) => {
  //   fetch(`http://localhost:5000/users/admin/${id}`, {
  //     method: 'PATCH',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.modifiedCount) {
  //         refetch();
  //         alert(`data updated`);
  //       }
  //     });
  // };

  return (
    <div className="grid grid-cols-5 pt-6 justify-center items-center">
      <div>{idx + 1}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>
        {/* <button onClick={() => addAdmin(_id)}>
          {role === 'admin' ? 'admin' : 'user'}
        </button> */}

        <button className="px-3 py-1 bg-sky-500">x</button>
      </div>
      <div>
        <button className="px-3 py-1 bg-sky-500">x</button>
      </div>
    </div>
  );
};

export default UsersRow;
