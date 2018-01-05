import React, { Component } from 'react'
import { View, NetInfo } from 'react-native'
import { connect } from 'react-redux';
import { hotelListFetch, hotelFetch, filterChanged } from '../../actions/HotelActions';
import HotelsView from './HotelsView'

class HotelList extends Component {

    componentWillMount() {
        this.props.hotelListFetch();
        NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectionChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this._handleConnectionChange);
    }
    _handleConnectionChange = (isConnected) => {
        console.log('_handleConnectionChange', isConnected)
        //this.props.changeConnectionState({ status: isConnected });
      };
    
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
        flex: 1
    },
};

const mapStateToProps = ({ hotels }) => {
    return { filterdList, listFetching } = hotels;
};

export default connect(mapStateToProps, {
    hotelListFetch,
    hotelFetch,
    filterChanged
})(HotelList);

