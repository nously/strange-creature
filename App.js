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

var tempPayloadEngToId = [];
var tempPayloadIdToEng = [];
var isETIActive = true;

const setActiveETI = () => {
	if (!isETIActive) {
		isETIActive = true;
	}
}

const notSetActiveETI = () => {
	if (isETIActive) {
		isETIActive = false;
	}
}

const search = (keyword) => {
	if  (isETIActive) {
		tempPayloadIdToEng = [];
		tempPayloadEngToId = [{key: 1, title: keyword, subtitle: "hello"}, {key: 2, title: keyword, subtitle: "hello2"}];
	} else {
		tempPayloadEngToId = [];
		tempPayloadIdToEng = [{key: 1, title: keyword, subtitle: "hello3"}, {key: 2, title: keyword, subtitle: "hello4"}];
	}
}

const retrieveDataETI = (payload) => {
	if (isETIActive)
		return tempPayloadEngToId;

	return [];
}

const retrieveDataITE = (payload) => {
	if (!isETIActive)
		return tempPayloadIdToEng;

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
