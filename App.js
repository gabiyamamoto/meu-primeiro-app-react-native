import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TextInput, Pressable } from "react-native";

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
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
          ></TextInput>

          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="********"></TextInput>
        </View>

        <View style={styles.secaoEsqueci}>
          <Text style={styles.textoRoxo}>Esqueci minha senha</Text>
        </View>

        <View style={styles.secaoBotao}>
            <Pressable style={styles.botao}>
              <Text style={styles.textoBotao}>Entrar</Text>
            </Pressable>
        </View>

        <View style={styles.secaoEntreCom}>
          <Text style={styles.textoCinza}>Ou entre com</Text>
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
    backgroundColor: '#fffcfc',
  },

  header: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  chapeu: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  sombraChapeu: {
    width: 96,
    height: 96,
    borderRadius: 20,
    backgroundColor: "#fffcfc",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,

    elevation: 15,
  },

  main: {
    padding: 25,
    flex: 1,
  },

  bemVindo: {
    fontSize: 25,
    fontWeight: '600',
  },

  subtitulo: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 15,
    color: '#808080',
    fontWeight: '600',
  },

  secaoLogin: {
    marginTop: 7,
    marginBottom: 5,
  },

  label: {
    fontWeight: '600',
  },

  input: {
    width: '97%',
    height: 45,
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#f3efef',
    borderRadius: 10,
    paddingHorizontal: 20,
  },

  secaoEsqueci: {
    alignItems: 'flex-end',
    marginHorizontal: 5,
    marginBottom: 7,
  },

  textoRoxo: {
    color: '#7529b8',
    fontWeight: '600',
  },

  secaoBotao: {
    marginVertical: 10,
  },

  botao: {
    backgroundColor: '#6721A5',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  secaoEntreCom: {
    marginVertical: 15,
    alignItems: 'center',
  },

  textoCinza: {
    color: '#808080',
    fontWeight: '600',
  },

  secaoPlataformas: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    gap: 40,
  },

  github: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  google: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  insta: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  secaoCadastrar: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },

});
