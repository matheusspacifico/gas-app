import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const GoBackArrow = () => {
    return (
        <TouchableOpacity style={styles.GoBackArrow}>
            <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
    );
};

export default GoBackArrow;

const styles = StyleSheet.create({
    GoBackArrow: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: "#E5E7EB",
        padding: 10,
        borderRadius: 5,
    
        // Sombra pra iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,

        // Sombra pra Android
        elevation: 5,
    },
});
