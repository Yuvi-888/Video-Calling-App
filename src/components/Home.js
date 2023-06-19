import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [roomID,setroomID]=useState('')
    function handle_input(e){
        setroomID(e.target.value)
    }

    let navigate=useNavigate()

    function handle_btn(){
            navigate(`/room/${roomID}`)
    }
  return (
    <>
    <h3 className='heading'>Enter room ID to join</h3>
    <input className="input_box" type="text" placeholder='Enter room ID:' value={roomID} onChange={handle_input}/>
    <button className="join_btn" onClick={handle_btn}>Join</button>

<div className="container">
    <div className="card" >
  <img src="https://img.freepik.com/free-photo/friends-family-making-videocall-catching-up_23-2149019117.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Connect with your friends.</h5>

  </div>
</div>

<div className="card" >
  <img src="https://images.wondershare.com/filmora/article-images/google-duo-app.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">1 on 1 call.</h5>
   
  </div>
</div>

<div className="card" >
  <img src="https://uploads-ssl.webflow.com/611bbb7ac16db06e3cda518c/61700e26703009464416754a_vicodo-video-call-website%20widget.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">In-chat feature.</h5>
    
  </div>
</div>
</div>
    </>
  )
}
