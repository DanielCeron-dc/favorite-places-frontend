import React, { useState } from 'react';

import Card from '../../shared/components/Card';
import Button from '../../shared/form/Button/Button';
import Modal from '../../shared/components/Modal/Modal';


import { PlaceInterface } from '../PlaceInterface';
import "./PlaceItem.css";
import PlaceModal from './PlaceModal/PlaceModal';



type PlaceItemProps = {
    place: PlaceInterface
};

const PlaceItem: React.FC<PlaceItemProps> = ({ place }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);


    return <>
        <PlaceModal show={showModal} onClose={closeModal} place={place}/>
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={place.image} alt={place.title} />
                </div>
                <div className="place-item__info">
                    <h2>{place.title}</h2>
                    <h3>{place.address}</h3>
                </div>
                <div className="place-item__actions">
                    <Button inverseStyle={true} onClick={openModal}>VIEW ON MAP</Button>
                </div>
            </Card>
        </li>
    </>
}


export default PlaceItem;