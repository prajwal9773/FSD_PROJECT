import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import AddCardForm from './AddCardForm.jsx';

const CardContainer = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/cards')
            .then(response => setCards(response.data))
            .catch(error => console.error(error));
    }, []);

    const addCard = (newCardData) => {
        axios.post('http://localhost:3000/cards', newCardData)
            .then(response => setCards([...cards, response.data]))
            .catch(error => console.error(error));
    };

    const moveCard = (fromIndex, toIndex) => {
        const updatedCards = [...cards];
        const [movedCard] = updatedCards.splice(fromIndex, 1);
        updatedCards.splice(toIndex, 0, movedCard);
        setCards(updatedCards);
    };

    // Handle card deletion
  // Deleting a card
  const handleDelete = async (id) => {
    console.log('Deleting card with ID:', id);  // Check if ID is valid
    try {
        await axios.delete(`http://localhost:3000/cards/${id}`);
        setCards(cards.filter(card => card._id !== id));
    } catch (error) {
        console.error("Error deleting card:", error);
    }
};


// Updating a card
const handleUpdate = async (updatedCard) => {
    try {
        const response = await axios.put(`http://localhost:3000/cards/${updatedCard._id}`, updatedCard);
        setCards(cards.map(card => (card._id === response.data._id ? response.data : card)));
    } catch (error) {
        console.error("Error updating card:", error);
    }
};


    return (
        <div>
            <AddCardForm onAdd={addCard} />
            <div className="card-container" style={{width:"600px"}}>
                {cards.map((card, index) => (
                    <Card 
                        key={card._id} 
                        data={card} 
                        onDelete={handleDelete}  // Pass delete handler
                        onUpdate={handleUpdate}   // Pass update handler
                        index={index} 
                        moveCard={moveCard} 
                    />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;


