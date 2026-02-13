import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.sombraChapeu}>
          <Image
            source={require("./assets/chapeu.png")}
            style={styles.chapeu}
          />
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.secaoTitulo}>
          <Text style={styles.bemVindo}>Bem-vindo de volta</Text>

          <Text style={styles.subtitulo}>Acesse sua conta do SENAI</Text>
        </View>
        <View style={styles.secaoLogin}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="envelope"
              size={15}
              color="#a3a3a3"
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor="#979797"
            ></TextInput>
          </View>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              size={18}
              color="#a3a3a3"
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="#979797"
              secureTextEntry={true}
            ></TextInput>
            <FontAwesome name="eye" size={18} color="#a3a3a3" />
          </View>
        </View>

        <View style={styles.secaoEsqueci}>
          <Text style={styles.textoRoxo}>Esqueci minha senha</Text>
        </View>

        <View style={styles.secaoBotao}>
          <TouchableOpacity style={styles.botao} activeOpacity={0.7}>
            <Text style={styles.textoBotao}>Entrar →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secaoEntreCom}>
          <View style={styles.line} />
          <Text style={styles.textoCinza}>Ou entre com</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.secaoPlataformas}>
          <View style={styles.iconsWrapper}>
            <Image
              source={require("./assets/github.png")}
              style={styles.github}
            />
          </View>
          <View style={styles.iconsWrapper}>
            <Image
              source={require("./assets/google.png")}
              style={styles.google}
            />
          </View>
          <View style={styles.iconsWrapper}>
            <Image
              source={require("./assets/insta.png")}
              style={styles.insta}
            />
          </View>
        </View>

        <View style={styles.secaoCadastrar}>
          <Text style={styles.textoCinza}>Não tem uma conta?</Text>
          <Text style={styles.textoRoxo}>Cadastre-se</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F7F9FA",
  },

  header: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  chapeu: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  sombraChapeu: {
    width: 96,
    height: 96,
    borderRadius: 20,
    backgroundColor: "#F7F9FA",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#985dff",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,

    elevation: 10,
  },

  main: {
    padding: 25,
    flex: 1,
  },

  bemVindo: {
    fontSize: 25,
    fontWeight: "600",
  },

  subtitulo: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 15,
    color: "#808080",
    fontWeight: "600",
  },

  secaoLogin: {
    marginTop: 7,
    marginBottom: 5,
  },

  label: {
    fontWeight: "600",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#eeeeee",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 20,
  },

  input: {
    flex: 1,
    height: 45,
    fontWeight: "600",
  },

  secaoEsqueci: {
    alignItems: "flex-end",
    marginHorizontal: 5,
    marginBottom: 7,
  },

  textoRoxo: {
    color: "#7529b8",
    fontWeight: "600",
  },

  secaoBotao: {
    marginVertical: 10,
  },

  botao: {
    backgroundColor: "#6721A5",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#5d00ff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 12,

    elevation: 10,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  secaoEntreCom: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    gap: 13,
  },

  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#ebebeb",
  },

  textoCinza: {
    color: "#808080",
    fontWeight: "600",
  },

  secaoPlataformas: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    gap: 30,
  },

  iconsWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#eeeeee",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  github: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  google: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  insta: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  secaoCadastrar: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
});
