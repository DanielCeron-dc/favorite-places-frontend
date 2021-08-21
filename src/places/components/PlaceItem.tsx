import React, { useState } from 'react';

import Card from '../../shared/components/Card';
import Button from '../../shared/form/form-utils/Button/Button';
import Modal from '../../shared/components/Modal/Modal';
import Map from "../../shared/components/Map";

import deletesvg from '../../assets/svg/delete.svg';

import { PlaceInterface } from '../PlaceInterface';
import "./PlaceItem.css";
import EditableText from '../../shared/components/EditableText/EditableText';


type PlaceItemProps = {
    place: PlaceInterface
};

const PlaceItem: React.FC<PlaceItemProps> = ({ place }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const modal = <Modal
        onClose={closeModal}
        show={showModal}
    >
        <Map center={place.coordinates} zoom={15} style={{ width: '70%', borderRadius: '2%' }} />
        <div style={{ width: '30%', padding: '10px', height: '80vh' }}>
            <img src={place.image} alt={place.title} style={{ width: '100%', height: '40%', borderRadius: '5%' }} />
            <EditableText active type="h3">{place.address}</EditableText>
            <EditableText active type="p">{place.description}</EditableText>
            <div style={{ position: 'absolute', bottom: 0, right: 0, margin: 25, display: 'flex' }} >
                <Button danger><img src={deletesvg} /></Button>
                <Button onClick={closeModal}>Close</Button>
            </div>
        </div>
    </Modal>;



    return <>
        {modal}
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
                    <Button inverse onClick={openModal}>VIEW ON MAP</Button>
                </div>
            </Card>
        </li>
    </>
}


export default PlaceItem;