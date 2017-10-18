import React from 'react';
import {
    Scene,
    Router,
    Stack,
} from 'react-native-router-flux';
import HotelsList from './components/HotelsList';
import {
    Text,
} from 'react-native';



const RouterComponent = () => {
    return (
        <Router >
            <Stack key="root" hideNavBar>
                <Stack
                    back={false}
                    key="main"
                    duration={0}
                    hideNavBar
                    initial>

                    <Scene
                        key="mainScreen"
                        component={HotelsList}
                        initial
                        hideNavBar
                    />
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
