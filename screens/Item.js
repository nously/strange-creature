import React, { Component } from "react"
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const style = StyleSheet.create({
	itemContainer: {
		borderWidth: 0.5,
		borderColor: "#c6c6c6",
		padding: 20,
		marginTop: 5,
		backgroundColor: "white"
	}
});

export default class Item extends Component {
	render() {
		return (
			<View style={style.itemContainer}>
				<Text h3>{ this.props.title }</Text>
				<Text>{ this.props.subtitle }</Text>
			</View>
		);
	}
}