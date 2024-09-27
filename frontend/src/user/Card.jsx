import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import axios from 'axios';

const Card = ({ data, index, moveCard, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
  const [updatedData, setUpdatedData] = useState({ title: data.title, content: data.content }); // State to handle updated values
  const [loading, setLoading] = useState(false); // Loading state

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
  const handleDelete = async () => {
    setLoading(true); // Set loading to true
    try {
      await axios.delete(`/cards/${data._id}`);
      onDelete(data._id); // Update parent state to remove the card
    } catch (error) {
      console.error('Error deleting card:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Handle edit mode toggle
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle save/update card
  const handleUpdate = async () => {
    setLoading(true); // Set loading to true
    try {
      const response = await axios.put(`/cards/${data._id}`, updatedData);
      onUpdate(response.data); // Update parent state with the new card data
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error('Error updating card:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
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
            style={{color:'black'}}
          />
          <textarea
            name="content"
            value={updatedData.content}
            onChange={handleChange}
            placeholder="Content"
            style={{color:'black'}}
          />
          <button onClick={handleUpdate} disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        // Default view when not editing
        <div>
          <h3 ref={drag}>{data.title}</h3> {/* Draggable title */}
          <p>{data.content}</p>
          <button onClick={handleEdit}>Edit</button> {/* Edit button */}
          
        </div>
      )}
    </div>
  );
};

export default Card;
