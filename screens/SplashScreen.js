import React from "react";
import { StatusBar, View, Text, ActivityIndicator } from "react-native";

export default class SplashScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {timeout: false};

		setTimeout(() => {
			this.setState( { timeout: true } )
			const { navigate } = this.props.navigation;
			if (this.state.timeout) {
				navigate("MainNavigator");
			};
		}, 1500);
	}

	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#34495e"
				}}
			>
				<Text style={{ color: "white", fontSize: 18 }}>Hello Splash</Text>
			</View>
		);
	}
}