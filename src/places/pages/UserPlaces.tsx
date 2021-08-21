
import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import Button from '../../shared/form/form-utils/Button/Button';


import PlaceList from '../components/PlaceList';
import { PlaceInterface } from '../PlaceInterface';




const DummyArray: PlaceInterface[] = [
    {
        id: 'dkjasdland',
        title: 'Test Place',
        description: 'Consequat anim exercitation magna ad quis laborum officia incididunt ea veniam. Exercitation laboris in ut sint est do proident esse mollit consectetur. Ullamco labore proident dolore exercitation elit ea ut fugiat tempor commodo.',
        address: 'Magna qui minim mollit esse pariatur esse eu incididunt deserunt sit deserunt magna enim.',
        image: 'https://placeimg.com/640/700/architure',
        creatorId: 'u1',
        coordinates: {
            lat: 37.7749295,
            lng: -122.4194155
        }
    },
    {
        id: 'dasddasd',
        title: 'Test Place',
        description: 'Test Description',
        address: 'Test Address',
        image: 'https://placeimg.com/640/600/architure',
        creatorId: 'u1',
        coordinates: {
            lat: 37.7749295,
            lng: -1.4194155
        }
    },
    {
        id: 'dasddasd',
        title: 'Test Place',
        description: 'Test Description',
        address: 'Test Address',
        image: 'https://placeimg.com/640/200/architure',
        creatorId: 'u1',
        coordinates: {
            lat: 37.7749295,
            lng: -1.4194155
        }
    },
    {
        id: 'dasddasd',
        title: 'Test Place',
        description: 'Test Description',
        address: 'Test Address',
        image: 'https://placeimg.com/640/500/architure',
        creatorId: 'u1',
        coordinates: {
            lat: 37.7749295,
            lng: -1.4194155
        }
    }
]

const UserPlaces: React.FC = () => {

    const { userId } = useParams<{ userId: string }>();
    const history = useHistory();

    const filteredArray = DummyArray.filter(place => place.creatorId === userId);

    return <>
        <PlaceList places={filteredArray} />
        <Button onClick={() => history.push("/places/addPlace")} style={{ position: 'fixed', bottom: 0, right: 0, margin: '5vh' }}> +  Add Place</Button>
    </>
}
export default UserPlaces;