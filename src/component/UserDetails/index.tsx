import { IUserData } from "../../interfaces";

interface IProps {
  user: IUserData;
}

const UserDetails = ({ user }: IProps) => {
  return (
    <div style={{ textAlign: "left", color: "white" }}>
      <h3> Full Name : {user.fullname}</h3>
      <h3>Username : {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Password : {user.password}</h3>
      <h3>Address  : {user.address}</h3>
    </div>
  );
};

export default UserDetails;
