const UserList = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>something went wrong</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <p key={item?.name}>{item?.name}</p>
      ))}
    </div>
  );
};

export default UserList;
