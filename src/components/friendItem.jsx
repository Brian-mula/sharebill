import Button from "./addButton"
export default function FriendItem({friend, onSelectedFriend, selectedFriend}){
    const handleSelectedFriend = () => {
        onSelectedFriend(friend)
    }
    return(
        <div className="flex px-6 mt-4 items-center">
            <div className="w-14 h-14 rounded-full">
                <img src="https://picsum.photos/200" alt="profile" className="w-full h-full rounded-full" />
            </div>
            <div className="px-2 max-w-[15rem]" >
                <h3>{friend.name}</h3>
                {friend.balance < 0 ? <p className="text-red-500">You owe {friend.name} Ksh. {Math.abs(friend.balance)}</p> : friend.balance > 0 ? <p className="text-green-500">{friend.name} owes you Ksh. {friend.balance}</p> : <p className="text-gray-500">You are settled up with {friend.name}</p>}
            </div>
            <Button onClick={handleSelectedFriend} >
                <span className="font-bold text-white">{ selectedFriend ===friend ? 'Close' : 'Select'}</span>
            </Button>
        </div>
    )
}