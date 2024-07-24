import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CalcularDireto from "@/components/calcularDireto";

export default function Index() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>

      <TouchableOpacity style={styles.NovoCarro} onPress={() => console.log("novo carro")}>
        <Ionicons name="add-circle-sharp" size={50} color={"black"} style={styles.NovoCarroIcon}/>
        <Text style={styles.NovoCarroText}>NOVO CARRO</Text>
      </TouchableOpacity>

      
    <CalcularDireto></CalcularDireto>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },

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
