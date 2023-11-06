import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { teamData } from "./teamsData";
import BigButton from './BigButton';
import { COLORS, FONT, SIZES } from '../../constants/theme';


//appearance of each button + trying to push the new screen onto nav stack
const TeamItem = (props) => {
    const navigation = useNavigation();
    return (
        <BigButton
            onPress={() => {
                navigation.navigate("Individual Team", {name: props.name, description: props.description})
            }}
            name = {props.name}
            dir = {props.id % 2 == 1 ? true : false}
            >
        </BigButton>
        /*
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigation.navigate("Individual Team", {name: props.name, description: props.description})
            }}>
            <Text style={styles.text}> { props.name } </Text>
        </TouchableOpacity>
        */
    );
};

//render the button idrk actually
const renderItem = ({ item }) => {
    return (
        <TeamItem name={item.name} description={item.description} id={item.id}/>
    )
};

//flatlist is like scrollview but better apparently
function Teams({}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={teamData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={
                    <View style={styles.separator}/>
                }>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
    },
    button: {
        backgroundColor: "#004B87",
        width: 150,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 23
    },
    text: {
        color: "#FFFFFF"
    },
    separator: {
        height: 10,   
    }
})

export default Teams;