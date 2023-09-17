import { useState } from "react";
import Button from "./addButton";

export default function AddFriendForm({onSetFriends}) {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFriend = {id:Date.now(), name:name, balance:0 };
    onSetFriends((friends)=>[...friends,newFriend])
    setName('')
  }
  return (
    <form className="mt-4"
    onSubmit={handleSubmit}
    >
      <div className="px-5 py-5 bg-orange-400">
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button>Add Friend</Button>
      </div>
    </form>
  );
}
