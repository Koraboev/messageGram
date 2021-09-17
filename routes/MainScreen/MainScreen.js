import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons, MaterialIcons, Feather, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import colors from "../../config/colors";

export default function MainScreen () {
    
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Ionicons name="md-menu" size={30} color={colors.white} />
                <Text style={styles.logoText}>Minus Messenger</Text>
                <MaterialIcons name="search" size={25} color={colors.white} />
                <MaterialIcons name="folder-open" size={25} color={colors.white} />
            </View>
            <View style={styles.bottomBar}>
                <AntDesign style={styles.icons} name="appstore-o" size={22} color={colors.iconBlue} />
                <Feather style={styles.icons} name="user" size={22} color={colors.iconBlue} />
                <Feather style={styles.icons} name="users" size={22} color={colors.iconBlue}  />
                <FontAwesome5 style={styles.icons} name="users" size={22} color={colors.iconBlue}  />
                <FontAwesome5 style={styles.icons}  name="star" size={22} color={colors.iconBlue}  />
                <FontAwesome style={styles.icons} name="bullhorn" size={22} color={colors.iconBlue}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: colors.darkBlue,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    logoText: {
        fontSize: 26,
        color: colors.white,
        fontWeight: 'bold',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icons: {
        padding: 13,
        borderBottomWidth: 2,
        borderColor: colors.darkBlue,
        borderRadius: 1,
    }
});