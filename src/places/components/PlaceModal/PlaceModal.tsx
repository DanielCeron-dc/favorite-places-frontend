import React, { CSSProperties, useEffect, useState } from 'react';

import useForm from '../../../hooks/useForm';

import EditableText from '../../../shared/components/EditableText/EditableText';
import Modal from '../../../shared/components/Modal/Modal';
import Button from '../../../shared/form/Button/Button';
import { PlaceInterface } from '../../PlaceInterface';
import Map from "../../../shared/components/Map";


import deletesvg from '../../../assets/svg/delete.svg';
import styles from './PlaceModal.module.css';

type PlaceModalProps = {
    place: PlaceInterface;
    onClose: () => void;
    show: boolean;
};

const DeleteButtonWithTootilp: React.FC<{ onDelete: () =>void}> = () => {
    
    const [deleting, setDeleting] = useState(false);
    
    const tooltipStyle: CSSProperties = {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '0 0 0 10px',
        top: '-225%',
        width: '220%', 
        border: '1px solid #ccc',
        padding: '10px',
    }

    return <div style={{ position: 'relative' }}>
        {deleting && <div style={tooltipStyle}>
            <h2 style={{margin: 'auto 0'}}>Are you sure ?</h2>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button danger style={{ paddingTop: 0, paddingBottom: 0 }} type = "button">
                    yes
                </Button>
                <Button style={{ paddingTop: 0, paddingBottom: 0 }} onClick={() => { setDeleting(false) }} type = "button">
                    Cancel
                </Button>
            </div>
        </div>}
        <Button danger style={{ paddingTop: 0, paddingBottom: 0 }} onClick={() => {setDeleting(true)}} type = "button">
            <img src={deletesvg} style={{ width: 30, margin: 0, padding: 0 }} />
        </Button>
    </div>
}


const PlaceModal: React.FC<PlaceModalProps> = ({ place, onClose, show }) => {

    const { register, onSubmit } = useForm();
    const [editing, setEditing] = useState(false); 

    const rightPanel = <div className={styles.information}>
        <img src={place.image} alt={place.title} className={styles.img}/>
        <div className={styles.information_text}>
            <EditableText name="title" active={editing} type="h3" ref={register}>{place.address}</EditableText>
            <EditableText name="description" active={editing} type="p" ref={register}>{place.description}</EditableText>
            <div className={styles.information_buttons} >
                {!editing && <Button type="button" onClick={onClose}>Close</Button>}
                {
                    editing && <DeleteButtonWithTootilp onDelete={() => { } } />
                }
                <Button inverseStyle type="button" onClick={() => setEditing(c => !c)}>
                    {editing ? 'Cancel' : 'Edit'}
                </Button>
                {editing && <Button type="submit">Save</Button>}
            </div>
        </div>
    </div>

    return <Modal
        onClose={onClose}
        show={show}
    >
        <form
            action=""
            className={styles.form}
            onSubmit={onSubmit((data) => {
                console.log(data);
                setEditing(false);
            })}
        >
            <Map center={place.coordinates} zoom={15} className={styles.map}  />
            {rightPanel}
        </form>
    </Modal>
}
export default PlaceModal;