import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          source={require("./assets/chapeu.png")}
          style={styles.chapeu}
        />
      </View>

      <View style={styles.main}>
        <View style={styles.secaoTitulo}>
          <Text style={styles.bemVindo}>Bem-vindo de volta</Text>

          <Text style={styles.subtitulo}>Acesse sua conta do SENAI</Text>
        </View>
        <View style={styles.secaoLogin}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
          ></TextInput>

          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="********"></TextInput>
        </View>

        <View style={styles.secaoEsqueci}>
          <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
        </View>

        <View style={styles.secaoBotao}>
          <Button title="Entrar"></Button>
        </View>

        <View style={styles.secaoEntreCom}>
          <Text style={styles.entreCom}>Ou entre com</Text>
        </View>

        <View style={styles.secaoPlataformas}>
          <Image
            source={require("./assets/github.png")}
            style={styles.github}
          />
          <Image
            source={require("./assets/google.png")}
            style={styles.google}
          />
          <Image
            source={require("./assets/insta.png")}
            style={styles.insta}
          />
        </View>

        <View style={styles.secaoCadastrar}>
          <Text style={styles.entreCom}>Não tem uma conta?</Text>
          <Text style={styles.Cadastrar}>Cadastre-se</Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
