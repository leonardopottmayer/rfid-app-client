import { useEffect, useRef, useState } from "react";
import UserInfo, { IUserInfo } from "./UserInfo";
import api from "./api";

function List() {
  const [userData, setUserData] = useState<IUserInfo | null>(null);
  const [rfidValue, setRfidValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const fetchRfid = async (rfidValue: string) => {
    const res = await api.get(`/rfid/${rfidValue}`);
    if (res.data.user == null) {
      setMessage("User not found!");
    } else {
      setMessage(res.data.message);
    }

    setUserData(res.data.user);
  };

  useEffect(() => {
    if (rfidValue.length == 10) {
      fetchRfid(rfidValue);
      setRfidValue("");
    }
  }, [rfidValue]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div>
      {message != "" && (
        <div>
          <span>{message}</span>
        </div>
      )}

      {userData && (
        <UserInfo
          name={userData?.name ?? ""}
          username={userData?.username ?? ""}
          rfid={userData?.rfid ?? ""}
        />
      )}

      <input
        placeholder="rfid"
        ref={inputRef}
        type="text"
        name="rfidField"
        id="rfidField"
        onChange={(e) => setRfidValue(e.target.value)}
        value={rfidValue}
      />
    </div>
  );
}

export default List;
