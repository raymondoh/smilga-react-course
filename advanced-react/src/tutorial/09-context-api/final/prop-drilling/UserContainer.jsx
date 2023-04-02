const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <React.Fragment>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </React.Fragment>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
