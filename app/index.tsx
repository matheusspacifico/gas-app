import { Text, View, SafeAreaView, StyleSheet} from "react-native";


export default function Index() {
  return (
    <SafeAreaView style = {styles.SafeAreaView}>
      <View style = {styles.View}>
        <Text>Rap de Baiano.</Text>
      </View>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({

  SafeAreaView:{
    flex: 1,
  },

  View:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } 
});