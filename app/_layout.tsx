import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="index" options={{
        headerTitle: "Home",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}/>
      <Stack.Screen name="novoCarroScreen" options={{
        headerTitle: "Novo Carro",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}/>
    </Stack>
  );
}