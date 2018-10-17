import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
export default class News extends Component {
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
				<View style={styles.title}>
					<Text
						style={styles.text}
						onPress={() => {
							this.props.navigation.navigate('Own');
						}}
					>
						news
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	title: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	text: {
		color: '#fff',
		fontSize: 20
	}
});
