import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';


export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" />
    </>

  );
}
