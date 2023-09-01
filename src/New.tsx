/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import api from "./api";

const New = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [rfidValue, setRfidValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const postRfid = async () => {
    try {
      const res = await api.post(`/rfid`, { name, username, rfid: rfidValue });
      setMessage(res.data.message);
    } catch (error: any) {
      setMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    if (rfidValue.length == 10) {
      postRfid();
      setRfidValue("");
      setName("");
      setUsername("");
    }
  }, [rfidValue]);

  return (
    <div>
      {message != "" && (
        <div>
          <span>{message}</span>
        </div>
      )}

      <input
        placeholder="name"
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="username"
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        placeholder="rfid"
        type="text"
        name="rfidField"
        id="rfidField"
        onChange={(e) => setRfidValue(e.target.value)}
        value={rfidValue}
      />
    </div>
  );
};

export default New;
