import { useState } from "react";
import Button from "./addButton";
import AddFriendForm from "./addFriendForm";
import DivideBillForm from "./divideBillForm";
import FriendItem from "./friendItem";

const friends = [
    {
        id: 1,
        name: "Caleb Rotich",
        balance: 0
            },
    {
        id: 2,
        name: "Kenneth Kipyegon",
        balance: -20
    },
    {
        id: 3,
        name: "Kipchumba Murkomen",
        balance: 20
    }
]

export default function FriendList(){
    const [friendss,setFriendss] = useState(friends)
    const [showAddForm, setShowAddForm] = useState(false)
    const [selectedFriend, setSelectedFriend] = useState(null)
    const handleShowAddForm = () => {
        setShowAddForm((show)=>!show)
    }
    const handleSelectedFriend = (friend) => {
        setSelectedFriend((curr)=>curr === friend ? null : friend)
    }
    // const handleBalance = (friend) => {
    //     setSelectedFriend((curr)=>curr === friend ? {balance:friend.balance + curr.balance, ...friend} : friend)
    // }
    return(
       <div className="flex">
         <div className="flex flex-col ml-20 shadow-sm">
            {
                friendss.map((friend, index) => (
                    <FriendItem key={index} friend={friend} onSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend} />
                ))
            }
            {showAddForm && <AddFriendForm onSetFriends ={setFriendss} />}

            <Button onClick={handleShowAddForm} >{ showAddForm? 'Close':'Add Friend'}</Button>
        </div>
        {selectedFriend && <DivideBillForm selectedFriend={selectedFriend} onSelectedFriend={setSelectedFriend} onChangeBalance={setFriendss} />}
       </div>
    )
}