import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import CalcularDireto from "@/components/calcularDireto";
import NovoCarro from "@/components/NovoCarro"

export default function Index() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <NovoCarro></NovoCarro>
      <CalcularDireto></CalcularDireto>  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
