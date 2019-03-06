import React, { Component } from "react"
import { View } from "react-native";
import { Icon, Input } from 'react-native-elements'

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);

		this.state = {keyword: ""}
	}

	handleInputChange() {
		var {keyword} = this.state;
		this.props.search(keyword);
	}

	render() {
		return (
			<View>
				<Input
					onSubmitEditing={this.handleInputChange}
					onChangeText={text => this.setState({keyword: text})}
					placeholder="Type here to translate"
					leftIcon={ <Icon 
						name="magnifying-glass"
						type="foundation"
					/> }
					inputContainerStyle={{ width: 325, height: 40 }}
				/>
			</View>
		);
	}
}

