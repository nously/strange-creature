import React, { Component } from "react"
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { NavigationEvents } from 'react-navigation'
import Item from "./Item"

const style = StyleSheet.create({
	scrollView: {
		backgroundColor: "#e0e0e0"
	}
});

export default class EngToId extends Component {
	constructor(props)
	{
		super(props);
		this.state = {isFocused: true, items: []};

		setInterval(() => {this.setState({items: this.props.retrieveData()});}, 700);
	}

	static navigationOptions = {
		title: "Id to Eng",
	}

	callbackItem(key){
		const { navigate } = this.props.navigation;
		navigate("Detail", {key: key});
	}

	render() {
		var items = this.state.items;
		var rows = [];

		for (var i = 0; i < items.length; i++) {
			rows.push(
				<TouchableOpacity key={i} onPress={this.callbackItem.bind(this, items[i].key)}>
					<Item key={items[i].key} title={items[i].title} subtitle={items[i].subtitle} />
				</TouchableOpacity>
			);
		}


		return (
			<ScrollView style={style.scrollView}>
				<NavigationEvents 
					onDidFocus={() => {this.props.activate()}}
				/>
				{rows}
			</ScrollView>
		)
	}
}