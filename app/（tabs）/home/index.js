
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
      <Text>Index page of Home Tab</Text>
      <Link href={"/home/next-page"} style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
      </Link>
    </View>
  );
}