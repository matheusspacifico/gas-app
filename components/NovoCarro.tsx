import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native';

const NovoCarro = () => {
    const screenWidth = Dimensions.get('window').width; // COBRIR A TELA INTEIRA HORIZONTALMENTE

    return (
        <View style={{ width: screenWidth }}>
            <TouchableOpacity style={styles.NovoCarro}>
                <Ionicons name="add-circle-sharp" size={50} color={"black"} style={styles.NovoCarroIcon} />
                <Text style={styles.NovoCarroText}>NOVO CARRO</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NovoCarro;

const styles = StyleSheet.create({
    NovoCarro: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: "#E5E7EB",
        width: '100%',
        justifyContent: "center",
    },
    NovoCarroIcon: {
        marginRight: 10,
    },
    NovoCarroText: {
        fontSize: 25,
        fontWeight: "bold",
    },
});
