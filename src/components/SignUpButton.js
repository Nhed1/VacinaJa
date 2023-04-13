import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export function SignUpButton() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Não tem acesso? </Text>
      <Text
        onPress={() => navigation.navigate("SignUp")}
        style={{ color: "#38bdf8" }}
      >
        Clique aqui
      </Text>
    </View>
  );
}
