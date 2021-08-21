import React, { CSSProperties, useEffect, useRef } from 'react';

interface MapProps {
    center?: google.maps.LatLngLiteral;
    zoom?: number;
    style?: CSSProperties;
};

const Map: React.FC<MapProps> = ({ center = { lat: 30, lng: -110 }, zoom = 8, style }) => {

    const refMap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refMap.current) return;

        const map: google.maps.Map = new google.maps.Map(refMap.current, {
            center,
            zoom
        });

        new google.maps.Marker({ position: center, map });
    }, [])

    return <div ref={refMap} style={style} />
}
export default Map;