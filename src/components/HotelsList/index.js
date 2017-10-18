import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { hotelsFetch } from '../../actions/HotelActions';
import HotelsView from './HotelsView'
import Utils from '../../helpers/utils.js'

class HotelList extends Component {

    componentWillMount() {
        this.props.hotelsFetch();
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
        height: Utils.getWindowDimensions().height.value,
        width: Utils.getWindowDimensions().width.value,
    },
};

const mapStateToProps = ({ hotels }) => {
    return { list, fetching } = hotels;
};

export default connect(mapStateToProps, { hotelsFetch })(HotelList);

