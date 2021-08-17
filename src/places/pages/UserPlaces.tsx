import React from 'react';
import { useParams } from "react-router-dom";


import PlaceList from '../components/PlaceList';
import { PlaceInterface } from '../PlaceInterface';

const DummyArray: PlaceInterface[] = [
    {
        id: 'dkjasdland',
        title: 'Test Place',
        description: 'Consequat anim exercitation magna ad quis laborum officia incididunt ea veniam. Exercitation laboris in ut sint est do proident esse mollit consectetur. Ullamco labore proident dolore exercitation elit ea ut fugiat tempor commodo.',
        address: 'Magna qui minim mollit esse pariatur esse eu incididunt deserunt sit deserunt magna enim.',
        image: 'https://placeimg.com/640/480/architure',
        creatorId: 'u1',
        latitude: '0',
        longitude: '0',
    },
    {
        id: 'dasddasd',
        title: 'Test Place',
        description: 'Test Description',
        address: 'Test Address',
        image: 'https://placeimg.com/640/480/architure',
        creatorId: 'test',
        latitude: '0',
        longitude: '0',
    }
]

const UserPlaces: React.FC = () => {

    const { userId } = useParams<{ userId: string }>();

    const filteredArray = DummyArray.filter(place => place.creatorId === userId);

    return <PlaceList places={filteredArray} />
}
export default UserPlaces;