import React, { useEffect, useRef } from 'react';

type MapProps = {
    center?: google.maps.LatLngLiteral;
    zoom?: number;
};

const Map: React.FC<MapProps> = ({ center = { lat: 30, lng: -110 }, zoom = 8 }) => {

    const refMap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refMap.current) return;

        const map: google.maps.Map = new google.maps.Map(refMap.current, {
            center,
            zoom
        });

        new google.maps.Marker({ position: center, map });
    }, [])

    return <div ref={refMap} style={{ width: '100%', height: '100%' }} />
}
export default Map;