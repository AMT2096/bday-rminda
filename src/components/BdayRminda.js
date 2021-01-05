import React, { useState } from 'react'
import data from '../bdayData'

const BdayRminda = () => {
  const [ friends, setFriends ] = useState(data);
  const [ btnTxt, setBtnTxt ] = useState("Clear All");

  const clearall = () => {
    if (friends.length !== 0) {
      setFriends([])
      setBtnTxt("Undo")
    } else {
      setFriends(data)
      setBtnTxt("Clear All")
    }
  }

  const removeFriend = (id) => {
    let friend = friends.filter(friend => friend.id !== id);
    setFriends(friend);
    if (friend.length === 0) {
      setFriends([])
      setBtnTxt("Undo")
    }
  }

  const friend = friends.map(friend => {
    const { id, name, age, img, color } = friend;
    return <div key={id} className="wrapper">
      <div className="img" style={{backgroundColor: color}}>
        <img src={img} alt={name} />
      </div>
      
      <div className="detailsWrapper">
        <div className="details">
          <h3 className="name">{name}</h3>
          <p className="age">{age} years</p>
        </div>

        <button className="removeItem" onClick={() => removeFriend(id)}>X</button>
      </div>
    </div>
  });

  return (
    <>
      <section className="container">
        <h1>{friends.length} Birthdays Today</h1>

        {
          friend
        }

        <button className='btn' onClick={clearall}>{btnTxt}</button>
      </section>
    </>
  )
}

export default BdayRminda;