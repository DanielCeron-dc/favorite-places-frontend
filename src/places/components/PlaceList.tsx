import React from 'react';
import { useHistory , useRouteMatch} from 'react-router-dom'; 


import Card from '../../shared/components/Card';
import Button from '../../shared/form/Button/Button';
import { PlaceInterface } from '../PlaceInterface';
import PlaceItem from './PlaceItem';
import "./PlaceList.css";

type PlaceListProps = {
    places: PlaceInterface[]
};

const PlaceList: React.FC<PlaceListProps> = (props) => {

    const history = useHistory();
    const { url} = useRouteMatch();

    return props.places.length === 0 ?
        <div className="place-list" >
            <Card style={{backgroundColor: 'white', height: '12rem', margin: 20}}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px"
                }}>
                    <h2>No places found. Maybe create one ? </h2>
                    <Button
                        onClick={() => history.push(url + "/new")}
                    >Add Place</Button>
                </div>
            </Card>
        </div> :
        <ul className="place-list">
            {props.places.map((place) => <PlaceItem place={place} key={place.id} />)}
        </ul>;

}
export default PlaceList;