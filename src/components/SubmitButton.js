import { Text, TouchableOpacity } from "react-native";

export function SubmitButton() {
  return (
    <TouchableOpacity
      style={{
        marginTop: 30,
        backgroundColor: "#38BDF8",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 12,
      }}
      accessibilityLabel="Sign In"
    >
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        Entrar
      </Text>
    </TouchableOpacity>
  );
}
