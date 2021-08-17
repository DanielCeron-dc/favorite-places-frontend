import React, { useState } from 'react';
import Card from '../../shared/components/Card';
import Button from '../../shared/components/FormElments/Button';
import Modal from '../../shared/components/Modal/Modal';

import { PlaceInterface } from '../PlaceInterface';
import "./PlaceItem.css";


type PlaceItemProps = {
    place: PlaceInterface
};

const PlaceItem: React.FC<PlaceItemProps> = ({ place }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return <>
        <Modal
            onClose={closeModal}
            show={showModal}
            header={place.address}
            contentClassName="place-item__modal-content"
            footerClassName="place-item__modal-actions"
            footer={<Button onClick={closeModal}>Close</Button>}
        >
            <div className="map-container">
                <h2>the Map</h2>
            </div>
        </Modal>
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={place.image} alt={place.title} />
                </div>
                <div className="place-item__info">
                    <h2>{place.title}</h2>
                    <h3>{place.address}</h3>
                    <p>{place.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openModal}>VIEW ON MAP</Button>
                    <Button to={`/places/${place.id}`}>Edit</Button>
                    <Button danger>Delete</Button>
                </div>
            </Card>
        </li>
    </>
}


export default PlaceItem;