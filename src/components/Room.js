import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


export default function Room() {
  const {roomID}=useParams()
    let myMeeting = async (element) => {
        const appID = 1909992331;
        const serverSecret ="5d6736a5144d09289f305d1a750c60d2";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Yuvraj");

        const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy Link',
            url:`http://localhost:3000/room/${roomID}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }
  return (
  <div ref={myMeeting}></div>
  )

}
