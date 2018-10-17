import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
export default class OwnScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageBackground: '#f2f2f2'
		};
	}
	render() {
		let { pageBackground } = this.state;
		return (
			<View style={[ styles.page, { backgroundColor: pageBackground } ]}>
				<Text style={[ styles.text, { color: '#404040' } ]}>welcome to myapp</Text>
				<Text
					style={styles.goapp}
					onPress={() => {
						this.props.navigation.navigate('Home');
					}}
				>
					开启app
				</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		marginBottom: 30
	},
	goapp: {
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 4,
		width: '80%',
		paddingBottom: 10,
		paddingTop: 10,
		textAlign: 'center',
		color: 'blue'
	}
});
