import React from 'react';
import Card from '../../shared/components/Card';
import Button from '../../shared/components/FormElments/Button';
import { PlaceInterface } from '../PlaceInterface';
import PlaceItem from './PlaceItem';
import "./PlaceList.css";

type PlaceListProps = {
    places: PlaceInterface[]
};

const PlaceList: React.FC<PlaceListProps> = (props) => {

    return props.places.length === 0 ?
        <div className="place-list" style={{ backgroundColor: "white" }}>
            <Card>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px"
                }}>
                    <h2>No places found. Maybe create one ? </h2>
                    <Button  >Add Place</Button>
                </div>
            </Card>
        </div> :
        <ul className="place-list">
            {props.places.map((place) => <PlaceItem place={place} key={place.id} />)}
        </ul>;

}
export default PlaceList;