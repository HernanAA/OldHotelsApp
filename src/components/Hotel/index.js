import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { hotelFetch } from '../../actions/HotelActions';
import HotelView from './HotelView'
import Utils from '../../helpers/utils.js'

class Hotel extends Component {

    componentWillMount() {
        this.props.hotelFetch();
    }

    render() {
        return (
            <View style={styles.screen}>
                <HotelView {...this.props} />
            </View>
        );
    }

}

const styles = {
    screen: {
        height: Utils.getWindowDimensions().height.value,
        width: Utils.getWindowDimensions().width.value,
    },
};

const mapStateToProps = ({ hotels }) => {
    const hotel = hotels.selectedHotel;
    const { hotelFetching, error } =  hotels

    return { hotel, hotelFetching, error}
};

export default connect(mapStateToProps, { hotelFetch })(Hotel);

