import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Utils from '../../helpers/utils';
import Styles from '../../styles'
import { HotelsViewItem } from './HotelsViewItem'
import { HotelsFilter } from './HotelsFilter'
import { Spinner, Header } from '../common';

class HotelsView extends Component {

    _renderItem({ item }) {
        return (
            <HotelsViewItem item={item} />
        )
    }

    _keyExtractor = (item, index) => item._id;

    onFilterChanged(text) {
        //this.props.filterChanged({ text });
    }

    render() {
        var list = <Spinner size="small" />

        if (!this.props.fetching) {
            if (this.props.error !== '') {
                list = <Text style={styles.listContainer}> {this.props.error} </Text>
            }
            else {
                list = (
                    <View style={styles.listContainer}>
                        <FlatList
                            data={this.props.list}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                        <Text> {"Se listaron " + this.props.list.length + " hoteles."} </Text>
                    </View>
                )
            }
        }


        return (
            <View style={styles.screen}>
                <Header headerText="Lista de hoteles" />
                <View style={styles.container}>
                    <HotelsFilter onFilterChanged={this.onFilterChanged}/>
                    {list}
                </View>
            </View>
        )

    }
}

export default HotelsView;

const styles = {
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    searchContainer: {
        backgroundColor: Styles.colors.blue,
        height: 63,
        flexDirection: 'row',
        paddingLeft: 20,
    },
    searchInputText: {
        marginLeft: 140,
        color: 'black',
        fontSize: 18,
        alignSelf: 'center',
        width: 300,
        backgroundColor: 'white'
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
    listContainer: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: Styles.colors.black,
    }

}