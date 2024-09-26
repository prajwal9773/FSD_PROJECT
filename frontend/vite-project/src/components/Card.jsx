// import React, { useState } from 'react';
// import axios from 'axios';

// const Card = ({ data, onDelete, onUpdate }) => {
//   const [isEditing, setIsEditing] = useState(false); // To toggle edit mode
//   const [updatedData, setUpdatedData] = useState({ title: data.title, content: data.content }); // State to handle updated values

//   // Handle delete card
//   const handleDelete = () => {
//     axios.delete(`/cards/${data._id}`)
//       .then(() => onDelete(data._id))  // Update the parent state to remove the card
//       .catch(error => console.error('Error deleting card:', error));
//   };

//   // Handle edit mode toggle
//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   // Handle save/update card
//   const handleUpdate = () => {
//     axios.put(`/cards/${data._id}`, updatedData)
//       .then(response => {
//         onUpdate(response.data);  // Update the parent state with the new card data
//         setIsEditing(false);  // Exit edit mode
//       })
//       .catch(error => console.error('Error updating card:', error));
//   };

//   // Handle input changes for title and content
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedData(prev => ({ ...prev, [name]: value }));
//   };

//   return isEditing ? (
//     // If in editing mode, show input fields
//     <div className="card">
//       <input
//         name="title"
//         value={updatedData.title}
//         onChange={handleChange}
//         placeholder="Title"
//       />
//       <textarea
//         name="content"
//         value={updatedData.content}
//         onChange={handleChange}
//         placeholder="Content"
//       />
//       <button onClick={handleUpdate}>Save</button>
//       <button onClick={() => setIsEditing(false)}>Cancel</button>
//     </div>
//   ) : (
//     // Default view when not editing
//     <div className="card">
//       <h3>{data.title}</h3>
//       <p>{data.content}</p>
//       <button onClick={handleEdit}>Edit</button> {/* Edit button */}
//       <button onClick={handleDelete}>Delete</button> {/* Delete button */}
//     </div>
//   );
// };

// export default Card;


import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import axios from 'axios';

const Card = ({ data, index, moveCard, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false); // To toggle edit mode
  const [updatedData, setUpdatedData] = useState({ title: data.title, content: data.content }); // State to handle updated values

  // Drag functionality for the card
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Drop functionality for the card
  const [, drop] = useDrop({
    accept: 'CARD',
    hover: (item) => {
      if (item.index !== index) {
        moveCard(item.index, index); // Move card
        item.index = index; // Update index
      }
    },
  });

  // Handle delete card
  const handleDelete = () => {
    axios.delete(`/cards/${data._id}`)
      .then(() => onDelete(data._id))  // Update the parent state to remove the card
      .catch(error => console.error('Error deleting card:', error));
  };

  // Handle edit mode toggle
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle save/update card
  const handleUpdate = () => {
    axios.put(`/cards/${data._id}`, updatedData)
      .then(response => {
        onUpdate(response.data);  // Update the parent state with the new card data
        setIsEditing(false);  // Exit edit mode
      })
      .catch(error => console.error('Error updating card:', error));
  };

  // Handle input changes for title and content
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div ref={drop} className="card" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {isEditing ? (
        // If in editing mode, show input fields
        <div>
          <input
            name="title"
            value={updatedData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={updatedData.content}
            onChange={handleChange}
            placeholder="Content"
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        // Default view when not editing
        <div>
          <h3 ref={drag}>{data.title}</h3> {/* Draggable title */}
          <p>{data.content}</p>
          <button onClick={handleEdit}>Edit</button> {/* Edit button */}
          <button onClick={handleDelete}>Delete</button> {/* Delete button */}
        </div>
      )}
    </div>
  );
};

export default Card;

