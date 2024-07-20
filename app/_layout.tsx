import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="index" options={{
        headerTitle: "Calculadora de Combustível",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}/>
    </Stack>
  );
}
