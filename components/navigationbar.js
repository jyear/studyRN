import React, { Component, PropTypes } from 'react';
// import NavigationService from 'path-to-NavigationService.js';
// import NavigationService from '../NavigationService';
import { withNavigation } from 'react-navigation';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

const NAVBAR_HEIGHT_ANDROID = 50;
const NAVBAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			hide: false
		};
	}
	goPage(e) {
		this.props.navigation.navigate(e);
	}
	render() {
		return (
			<View style={[ styles.navbar, { ...this.props.style } ]}>
				<View style={styles.navbtn}>
					<Text style={styles.navbtnbox}>
						<Text style={styles.navbtntext} onPress={this.goPage.bind(this, 'Home')}>
							Home
						</Text>
					</Text>
				</View>
				<View style={styles.navbtn}>
					<Text style={styles.navbtnbox}>
						<Text style={styles.navbtntext} onPress={this.goPage.bind(this, 'News')}>
							News
						</Text>
					</Text>
				</View>
				<View style={styles.navbtn}>
					<Text style={styles.navbtnbox}>
						<Text style={styles.navbtntext} onPress={this.goPage.bind(this, 'Own')}>
							Own
						</Text>
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		paddingBottom: 10,
		paddingTop: 10,
		minHeight: 40
	},
	navbtn: {
		flex: 1
	},
	navbtnbox: {
		width: '100%',
		textAlign: 'center'
	},
	navbtntext: {
		textAlign: 'center'
	}
});
export default withNavigation(NavigationBar);
