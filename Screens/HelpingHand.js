import AppLoading from 'expo-app-loading';
import * as React from 'react';
import {Text, TouchableOpacity, KeyboardAvoidingView, Image, View,Platform,Dimensions, StatusBar, TextInput, Alert, StyleSheet, ScrollView, FlatList} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import db from '../Config';

let custom_font = {'customfont':require('../assets/customFont/WhaleITriedRegular.ttf')}

export default class HelpingHand extends React.Component{
    constructor(){
        super();
        this.state = {fontLoaded: false};
    }

    async loadFonts(){
        await Font.loadAsync(custom_font);
        this.setState({fontLoaded: true});
    }

    componentDidMount(){
        this.loadFonts();
    }

    render(){
        if(! this.state.fontLoaded){
            return <AppLoading />
        }else{
          return(
            <View style = {styles.container}>
                <View style = {styles.topcontainer}>
                    <SafeAreaView style = {styles.safeview}/>
                    <Text style = {styles.appTitleText}>App Name</Text>
                    <Text style = {styles.title}>Helping Hand</Text>
                    <TouchableOpacity style = {styles.aad}>
                        <Text style = {{fontSize: RFValue(18),color: '#03006b', fontFamily: 'customfont'}}>Ask a doubt</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.discussion}>

                </View>
            </View>
    );
}
}
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    topcontainer: {
        backgroundColor: 'skyblue',
        justifyContent: "center",
        alignItems:"center",
        width: '100%',
        height: '40%'
    },
    safeview: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitleText: {
        fontSize: RFValue(30),
        fontFamily: 'customfont'
    },
    title: {
        marginTop: 15,
        fontSize: RFValue(35),
        fontFamily: 'customfont',
    },
    aad: {
        backgroundColor: 'white',
        marginTop: 50,
        bottom: 30,
        alignItems: 'center',
        width: '85%',
        borderRadius: 30,
        height: RFValue(30)
    },
});