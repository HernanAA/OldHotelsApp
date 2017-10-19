import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { hotelListFetch, hotelSelect } from '../../actions/HotelActions';
import HotelView from './HotelView'
import Utils from '../../helpers/utils.js'

class Hotel extends Component {

    componentWillMount() {
        this.props.hotelListFetch();
    }

    render() {
        //alert(JSON.stringify(this.props.selectedHotel))
        return (
            <View style={styles.screen}>
                {/* <HotelView {...this.props} /> */}
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
    return { selectedHotel } = hotels;
};

export default connect(mapStateToProps, { hotelListFetch, hotelSelect })(Hotel);

