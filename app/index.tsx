import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import CalcularDireto from "@/components/calcularDireto";
import NovoCarro from "@/components/novoCarro";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Link href="/novoCarroScreen">
        <NovoCarro></NovoCarro>
      </Link>
      <CalcularDireto></CalcularDireto>  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: "center",
  },
});