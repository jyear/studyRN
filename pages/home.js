import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../components/navigationbar';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageBackground: 'green'
		};
	}
	render() {
		let { pageBackground } = this.state;
		return (
			<View style={[ styles.page, { backgroundColor: pageBackground } ]}>
				<View style={styles.content}>
					<Text style={styles.text}>home</Text>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	content: {
		flex: 1
	},
	text: {
		color: '#fff',
		fontSize: 20
	}
});
