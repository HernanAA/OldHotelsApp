import React, { Component } from 'react'
import { View, FlatList, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Utils from '../../helpers/utils';
import Styles from '../../styles'
import { HotelViewItem } from './HotelViewItem'
import { Spinner, Header } from '../common';
import { Stars, Map } from '../common';


class HotelView extends Component {

    onHotelPress(item) {
        this.props.hotelSelect(item);
        Actions.hotel();
    }

    renderItem({ item }) {
        return (
            <HotelViewItem item={item} />
        )
    }

    render() {
        const hotel = this.props.hotel;
        const title = <Header headerText={this.props.hotelFetching ? '' : hotel.name} />
        const LATITUDE = 48.42788111790396;
        const LONGITUDE = -123.36475100000001;
        const POINT = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
        };

        if (this.props.hotelFetching) {
            return (
                <View style={styles.screen}>
                    {title}
                    <Spinner size="small" />
                </View>
            )
        }

        if (this.props.error !== '') {
            return (
                <View style={styles.screen}>
                    {title}
                    <View style={styles.errorContainer}>
                        <Text> {this.props.error} </Text>
                    </View>
                </View>
            )
        }

        return (
            <ScrollView style={styles.screen}>
                <Header headerText={this.props.hotelFetching ? '' : hotel.name} />
                <View style={styles.container}>
                    <View>
                        <FlatList
                            horizontal
                            keyExtractor={(item, index) => index}
                            data={hotel.images}
                            renderItem={this.renderItem.bind(this)}
                        />
                    </View>
                    <View style={styles.dataContainer}>
                        <View style={styles.line}>
                            <Text style={styles.hotelName}>{hotel.name} </Text>
                            <Text style={styles.priceText}>Precio Por Noche</Text>
                        </View>
                        <View style={styles.line}>
                            <View style={styles.stars}>
                                <Stars starsAmount={hotel.stars} />
                            </View>
                            <Text style={styles.priceValue}>ARS {hotel.price.thousandDot()}</Text>
                        </View >
                        <View style={styles.lineAddress}>
                            <Icon name='room' size={18} color={Styles.colors.darkGray}
                                style={{ paddingTop: 2 }} />
                            <Text style={styles.addressText}>Rue de la Rambla 8989</Text>
                        </View>
                    </View>
                    <View style={styles.mapStyle}>
                        <Map point={POINT} />
                    </View>
                </View>
            </ScrollView>
        )

    }
}

export default HotelView;

const styles = {
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    navBarLeftButton: {
        backgroundColor: Styles.colors.transparent,
        height: 30,
        width: 30,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
    },
    icon: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        color: Styles.colors.black,
    },
    dataContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0,
        backgroundColor: Styles.colors.white,
    },
    errorContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 3,
    },
    priceText: {
        alignSelf: 'flex-end',
        fontSize: 9,
        color: Styles.colors.lighterGray,
    },
    hotelName: {
        fontSize: 16,
        color: Styles.colors.black,
        fontWeight: '500'
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    priceValue: {
        fontSize: 13,
        color: Styles.colors.yellow,
        fontWeight: '500'
    },
    lineAddress: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 3,
    },
    addressText: {
        fontSize: 16,
        color: Styles.colors.darkGray,
        paddingBottom: 2,
    },
    mapStyle: {
        height: 300,
    }

}