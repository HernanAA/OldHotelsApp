import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { hotelListFetch, hotelFetch } from '../../actions/HotelActions';
import HotelsView from './HotelsView'
import Utils from '../../helpers/utils.js'

class HotelList extends Component {

    componentWillMount() {
        this.props.hotelListFetch();
    }

    render() {
        return (
            <View style={styles.screen}>
                <HotelsView {...this.props} />
            </View>
        );
    }

}

const styles = {
    screen: {
        flex:1
    },
};

const mapStateToProps = ({ hotels }) => {
    return { list, listFetching } = hotels;
};

export default connect(mapStateToProps, 
    { hotelListFetch, 
        hotelFetch })(HotelList);

