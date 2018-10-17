import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, NavigationActions } from 'react-navigation';
import HomeScreen from './pages/home';
import ConnectScreen from './pages/connect';
import FindScreen from './pages/find';
import MyScreen from './pages/my';
import WelcomeScreen from './pages/welcome';

import msgIcon from './resources/images/message.png';
import connectIcon from './resources/images/connect.png';
import findIcon from './resources/images/find.png';
import myIcon from './resources/images/my.png';

const styles = StyleSheet.create({
	iconbox: {
		position: 'relative'
	},
	text: {
		position: 'absolute',
		right: -5,
		top: 0,
		borderRadius: 10,
		width: 10,
		height: 10,
		backgroundColor: 'red'
	}
});
const setIcon = function({ ...set }) {
	return (
		<View style={styles.iconbox}>
			<Text style={styles.text} />
			<Image
				source={set.source}
				style={{
					width: 24,
					height: 24
				}}
				tintColor={set.focused ? 'green' : set.tintColor}
			/>
		</View>
	);
};
const RootTab = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: (navigation) => {
				alert(JSON.stringify(navigation));
				return {
					tabBarLabel: '微信',
					tabBarIcon: (state) => {
						return setIcon({ ...state, source: msgIcon });
					}
				};
			}
		},
		Connect: {
			screen: ConnectScreen,
			navigationOptions: (navigation) => {
				return {
					tabBarLabel: '通讯录',
					tabBarIcon: (state) => {
						return setIcon({ ...state, source: connectIcon });
					}
				};
			}
		},
		Find: {
			screen: FindScreen,
			navigationOptions: (navigation) => {
				return {
					tabBarLabel: '发现',
					tabBarIcon: (state) => {
						return setIcon({ ...state, source: findIcon });
					}
				};
			}
		},
		My: {
			screen: MyScreen,
			navigationOptions: (navigation) => {
				return {
					tabBarLabel: '我',
					tabBarIcon: (state) => {
						return setIcon({ ...state, source: myIcon });
					}
				};
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: 'green'
		}
	}
);
let showWelcome = false;
const RootStack = createStackNavigator(
	{
		// Welcome: {
		// 	screen: WelcomeScreen,
		// 	navigationOptions: (props) => {}
		// },
		RootTab: {
			screen: RootTab,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		navigationOptions: {
			header: null
		}
	}
);

export default class App extends Component {
	render() {
		return <RootStack />;
	}
}
