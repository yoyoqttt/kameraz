 
import React, {useState, useContext} from 'react';
import '../styles/RoomCard.css';
import { requestRoom } from '../api/rooms';
import { authContext } from '../context/authContext';

const RoomCard = ({ room, onClose }) => {
     const [error, setError] = useState('');
    const { token } = useContext(authContext)
     const handleRequestRoom = async () => {
            try {
                if(!token){
                    setError('login first')
                    return;
                }
              await requestRoom(room._id, token);
                setError('Request Send Sucessfully!')
          } catch (err) {
                setError(err.response.data.msg);
            }
        };
   return (
        <div className="room-card">
            <button className="close-button" onClick={onClose}>
            close
            </button>
        <h2>{room.title}</h2>
          {room.image && <img src={room.image} alt={room.title} style={{width: '100%', height: 'auto'}} />}
           <p><b>Description: </b>{room.description}</p>
           {/* <p><b>Price: </b>${room.price}</p> */}
           {error && <p className='error-message'>{error}</p>}
           <button className="request-button" onClick={handleRequestRoom}>Request Room</button>
           
      </div>
    );
};

export default RoomCard;
 