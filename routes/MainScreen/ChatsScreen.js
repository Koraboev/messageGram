import React, { useState } from "react";
import { FlatList, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

import colors from "../../config/colors";
export default function ChatsScreen () {
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes();
    var date = hours + ':' + min;

    const [chats, setChats] = useState ([
        {photo: require('../../assets/images/photo.jpg'), userName: 'Saidazim', lastMessage: 'Hello my name is John and I am react developer', time: '20:21', unread: 0, id: '1'},
        {photo: require('../../assets/images/photo1.jpg'), userName: 'Elbek de Java', lastMessage: 'Hello', time: '20:21', unread: 5, id: '2'},
        {photo: require('../../assets/images/photo2.jpg'), userName: 'Nurbek Qoraboyev', lastMessage: 'what a beautiful day', time: '20:21', unread: 3, id: '3'},
        {photo: require('../../assets/images/photo3.jpg'), userName: 'Charlis', lastMessage: 'I am react developer', time: '20:21', unread: 0, id: '4'},
        {photo: require('../../assets/images/photo4.jpg'), userName: 'Anjelina', lastMessage: 'just do it', time: '20:21', unread: 11, id: '5'},
        {photo: require('../../assets/images/photo5.jpg'), userName: 'Bob Christan', lastMessage: 'i am coming', time: '20:21', unread: 0, id: '6'},
        {photo: require('../../assets/images/photo6.jpg'), userName: 'Mirzakarim', lastMessage: 'no, it is not worth', time: '20:21', unread: 0, id: '7'},
        {photo: require('../../assets/images/photo7.jpg'), userName: 'Brad Pitt', lastMessage: 'he is little brother, Nurbek', time: '20:21', unread: 12, id: '8'},
        {photo: require('../../assets/images/photo8.jpg'), userName: 'Andresola', lastMessage: 'Hello my name is John and I am react developer', time: '20:21', unread: 5, id: '9'},
        {photo: require('../../assets/images/photo9.jpg'), userName: 'Shon', lastMessage: 'John and I are react developer', time: '20:21', unread: 17, id: '10'},
    ]);

    return (
        <FlatList
            data = {chats}
            renderItem={({item}) => (
                <TouchableOpacity>
                    <View style={styles.content}>
                        <View style={styles.imgBox}><Image style={styles.img} source={item.photo}/></View> 
                        <View style={styles.textBox}>
                            <View style={styles.chatInfo}>
                                <Text style={styles.friendName}>
                                    {item.userName}
                                </Text>
                                <Text style={styles.lastMessenger}>Who is write: <Text maxLength={20} style={styles.lastMessage}>{item.lastMessage.length > 22 ? item.lastMessage.substr(0, 22) + '...' : item.lastMessage}</Text></Text>
                            </View> 
                            <View style={styles.timeInfo}>
                                <Text style={styles.time}>{date}</Text>
                                <Text style={item.unread != 0 ? styles.unread: styles.hidde}>{item.unread != 0 ? item.unread:null}</Text>
                            </View> 
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    imgBox: {
        width: 60,
        height: 60,
        marginLeft: 15,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: 1,
        marginLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.5,
        borderColor: colors.gray,
    },
    chatInfo: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexGrow: 1,
    },
    friendName: {
        fontWeight: 'bold',
    },
    lastMessenger: {
        color: colors.blue,
    },
    lastMessage: {
        color: colors.gray,
    },
    timeInfo :{
       flexDirection: 'column',
       justifyContent: 'space-evenly',
       alignItems: 'flex-end', 
    },
    time: {
        color: colors.gray,
    },
    unread: {
        color: colors.white,
        backgroundColor: colors.green,
        paddingHorizontal: 7,
        paddingVertical: 1,
        borderRadius: 20,
    },
    hidden: {
        display: 'none',
    }
});