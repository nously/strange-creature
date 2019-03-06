import React, { Component } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"

export default class Detail extends Component {
	static navigationOptions = {
		title: "Detail",
	}
	render() {
		var nav = this.props.navigation
		var key = nav.getParam("key", -1)

		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}} >
				<Text>{key}</Text>
			</View>
		)
	}
}
