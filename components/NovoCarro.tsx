import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const NovoCarro = () => {
    return(
        <TouchableOpacity style={styles.NovoCarro} onPress={() => console.log("novo carro")}>
            <Ionicons name="add-circle-sharp" size={50} color={"black"} style={styles.NovoCarroIcon}/>
            <Text style={styles.NovoCarroText}>NOVO CARRO</Text>
        </TouchableOpacity>
    );
};

export default NovoCarro;

const styles = StyleSheet.create({
    NovoCarro: {
        flexDirection: "row",
        alignItems: "center",
        padding: 40,
        backgroundColor: "#E5E7EB",
      },
    
      NovoCarroIcon: {
        flex: 1,
      },
    
      NovoCarroText: {
        flex: 2,
        fontSize: 25,
        fontWeight: "bold",
      },
});