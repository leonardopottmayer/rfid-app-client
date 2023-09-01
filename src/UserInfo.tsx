export interface IUserInfo {
  name: string;
  username: string;
  rfid: string;
}

const UserInfo = (props: IUserInfo) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Username: {props.username}</p>
      <p>RFID: {props.rfid}</p>
    </div>
  );
};

export default UserInfo;
