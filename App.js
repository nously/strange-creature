import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer,
	createMaterialTopTabNavigator
} from "react-navigation"
import React, { Component } from "react"
import {View} from "react-native"

import Detail from "./screens/Detail";
import EngToId from "./screens/EngToId";
import IdToEng from "./screens/IdToEng";
import SplashScreen from "./screens/SplashScreen";
import SearchBar from "./screens/SearchBar";

var tempPayload = [];
var isETIActive = true;

const setActiveETI = () => {
	tempPayload = [];
	isETIActive = true;
}

const notSetActiveETI = () => {
	tempPayload = [];
	isETIActive = false;
}

const search = (keyword) => {
	tempPayload = [{key: 1, title: keyword, subtitle: "hello"}, {key: 2, title: keyword, subtitle: "hello2"}];
}

const retrieveDataETI = (payload) => {
	if (isETIActive)
		return tempPayload;

	return [];
}

const retrieveDataITE = (payload) => {
	if (!isETIActive)
		return tempPayload;

	return [];
}

const SearchNavigator = createMaterialTopTabNavigator({
	EngToId: {screen: props => <EngToId {...props} retrieveData={retrieveDataETI} activate={setActiveETI} />},
	IdToEng: {screen: props => <IdToEng {...props} retrieveData={retrieveDataITE} activate={notSetActiveETI}/>}
}, 
{
	navigationOptions: {
		headerStyle: { backgroundColor: "#d6d6d6" },
		headerLeft: ( <View><SearchBar search={search} /></View>	)
	},
	tabBarOptions: { style: { backgroundColor: "black"}}
});

const MainNavigator = createStackNavigator({
	Search: { screen: SearchNavigator },
	Detail: { screen: Detail }
});

const SplashNavigator = createStackNavigator({
	Splash: { screen: SplashScreen }
});

const RootNavigator = createSwitchNavigator({
	SplashNavigator: SplashNavigator,
	MainNavigator: MainNavigator
});

const App = createAppContainer(RootNavigator);

export default App;
