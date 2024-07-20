import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>

      <TouchableOpacity style={styles.NovoCarro} onPress={() => console.log("novo carro")}>
        <Ionicons name="add-circle-sharp" size={50} color={"black"} style={styles.NovoCarroIcon}/>
        <Text style={styles.NovoCarroText}>NOVO CARRO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.CalcularDireto} onPress={() => console.log("calcular direto")}>
        <Text style={styles.CalcularDiretoText}>Calcular Direto</Text>
      </TouchableOpacity>


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
});
