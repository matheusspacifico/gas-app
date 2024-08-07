import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

const CalcularDireto = () => {
    return(
        <TouchableOpacity style={styles.CalcularDireto}>
            <Text style={styles.CalcularDiretoText}>Calcular Direto</Text>
        </TouchableOpacity>
    );
};

export default CalcularDireto;

const styles = StyleSheet.create({
    CalcularDireto: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: "#E5E7EB",
        padding: 20,
        borderRadius: 5,
    
        // SOMBRA PRO IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        // SOMBRA PRO IOS
    
        elevation: 5, // SOMBRA PRO ANDROID
      },
    
      CalcularDiretoText: {
        fontSize: 20,
        fontWeight: "bold",
      }
})
