import { useState } from "react"
import Button from "./addButton"

export default function DivideBillForm({selectedFriend, onSelectedFriend, onChangeBalance}) {
  const handleCancel = () => {
    onSelectedFriend(null)
  }
  const [bill,setBill] = useState(0)
  const  [amount,setAmount] = useState(0)
  const [pay,setPay] = useState('')
  const bal = bill - amount
  const handlePay = () => {
    if(pay === 'you'){
      // selectedFriend.balance = selectedFriend.balance + bal
      // onChangeBalance({balance:selectedFriend.balance + bal, ...selectedFriend})
      onChangeBalance((friends)=>friends.map((friend)=>friend.id === selectedFriend.id ? {...friend,balance:friend.balance + bal} : friend))
    }else{
      // selectedFriend.balance = selectedFriend.balance - bal
      onChangeBalance((friends)=>friends.map((friend)=>friend.id === selectedFriend.id ? {...friend,balance:friend.balance - bal} : friend))
    }
    onSelectedFriend(null)
  }
    return (
        <div className="mx-6">
            <form>
            <div className="px-5 py-5 bg-orange-400">
              <h1>Share Bill with {selectedFriend.name}</h1>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for=""
          >
            Total Bill
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            placeholder="Bill.."
            value={bill}
            onChange={(e)=>setBill(Number(e.target.value))}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for=""
          >
            How much will you pay
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            placeholder="Bill.."
            value={amount}
            onChange={(e)=>setAmount(Number(e.target.value))}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for=""
          >
            {selectedFriend.name}'s Pay
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
            type="text"
            placeholder="Bill.."
            value={bal}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for=""
          >
            Who will Pay
          </label>
          <select value={pay} onChange={(e)=>setPay(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value='you'>You</option>
            <option value={selectedFriend} >{selectedFriend.name}</option>
          </select>
        </div>
        <div className="flex justify-between">
        <Button onClick={handlePay} >Pay</Button>
        <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
            </form>
        </div>
    )
}