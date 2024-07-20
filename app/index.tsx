import { Text, View, SafeAreaView, StyleSheet} from "react-native";


export default function Index() {
  return (
    <SafeAreaView style = {styles.SafeAreaView}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",}
        }>
        <Text>Rap de Baiano.</Text>
      </View>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },

});