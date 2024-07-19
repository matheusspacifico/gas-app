import { 
  Text, 
  View,
  SafeAreaView
} from "react-native";


export default function Index() {
  return (
    <SafeAreaView>
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Text>Rap de Baiano.</Text>
      </View>
    </SafeAreaView>
  );
}
