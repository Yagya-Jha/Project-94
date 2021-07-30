import AppLoading from 'expo-app-loading';
import * as React from 'react';
import {Text, TouchableOpacity, KeyboardAvoidingView, Image, View,Platform,Dimensions, StatusBar, TextInput, Alert, StyleSheet, ScrollView, FlatList} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import firebase from 'firebase';
import db from '../Config';

let custom_font = {'customfont':require('../assets/customFont/WhaleITriedRegular.ttf')}

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            fontLoaded: false,
            data: [{Name: 'Yagya Jha'}, {Grade: 'VIII'}, {Profilepic: 'image_2'}],
            images: {
                "image_1": require('../assets/Profile_Pictures/profile_img.png'),
                "image_2": require('../assets/Profile_Pictures/profile_img_2.png'),
                "image_3": require('../assets/Profile_Pictures/profile_img_3.png'),
            },
        };
    }

    async loadFonts(){
        await Font.loadAsync(custom_font);
        this.setState({fontLoaded: true});
    }

    fetchUser = async()=>{
        let userid = firebase.auth().currentUser.email;
        if(db.collection("users").where('email', '==', userid)){
            let data = doc.data();
            
            if(data){
                this.setState({data: data});
                console.log(this.state.data);
                return <Text>Username: {data.Name}</Text>
            }
            console.log(this.state.data);
        }
        console.log(this.state.data);
    }

    componentDidMount(){
        this.fetchUser();
        this.loadFonts();
    }

    keyExtractor = (index, item)=> index.toString();

    renderItem = ({item})=>(
        <View>
           {item.Profilepic!==undefined?(<Image source = {this.state.images[item.Profilepic]} style = {{width: RFValue(64), height: RFValue(64), alignSelf: "center"}} />) : (<Text></Text>)}
           {item.Name!==undefined?(<Text  style = {{fontSize: RFValue(20), fontFamily: 'customfont'}}>{"Student Name "+ item.Name}</Text>) : (<Text></Text>)}
           {item.Grade!==undefined?(<Text style = {{fontSize: RFValue(20), fontFamily: 'customfont'}}>{"Student Grade "+ item.Grade}</Text>) : (<Text></Text>)}
        </View>
        )

    render(){
        if(! this.state.fontLoaded){
            return <AppLoading />
        }
        else{
            return(
                <View style = {styles.container}>
                    <SafeAreaView style = {styles.safeview}/>
                        <Text style = {styles.appTitleText}>App Name</Text>
                        <Text style = {styles.title}>Profile</Text>
                        <View>
            
                            <FlatList
                            keyExtractor = {this.keyExtractor}
                            data = {this.state.data}
                            renderItem = {this.renderItem}
                            />
            </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff61',
        justifyContent: "center",
        alignItems:"center",
    },
    safeview: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitleText: {
        marginTop: 100,
        fontSize: RFValue(30),
        fontFamily: 'customfont'
    },
    title: {
        marginTop: 15,
        fontSize: RFValue(25),
        fontFamily: 'customfont',
    }
});