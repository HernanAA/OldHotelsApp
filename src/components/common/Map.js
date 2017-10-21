import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../styles'
import Utils from '../../helpers/utils';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

var Map = ({ point }) => {
    const { width, height } = Utils.getWindowDimensions();

    const ASPECT_RATIO = width.value / height.value;
    const LATITUDE = 41.38195781399147;
    const LONGITUDE = 2.1763343999999734;
    const LATITUDE_DELTA = 0.0122;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const SAMPLE_REGION = {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };

    return (

        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}
            style={StyleSheet.absoluteFillObject}
        >
            <MapView.Marker coordinate={{latitude: LATITUDE,
                longitude: LONGITUDE,}}>
                <Icon name='room' size={18} color={Styles.colors.darkGray} />
            </MapView.Marker>
        </MapView>

    );
};

const styles = {
    stars: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
};

export { Map };




