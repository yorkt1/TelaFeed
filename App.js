import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.ScrollTamanho}>
        <Body />
      </ScrollView>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24c28d',
  },

  // Cima
  Header: {
    height: '10%',
    backgroundColor: '#24c28d',
  },

  // Meio
  Body: {
    height: window.height * 0.80,
    borderRadius: 20,
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: '#eaead4',
  },

  // Estilização do BaixoBody
  FooterBody: {
    height: window.height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#eaead4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  // Baixo
  Footer: {
    height: '13%',
    backgroundColor: '#24c28d',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  // Estilização do FooterEsquerda
  footerEsquerda: {
    height: '100%',
    backgroundColor: '#24c28d',
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Estilização do FooterMeio
  footerMeio: {
    height: '100%',
    backgroundColor: '#24c28ded',
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'relative',
    marginTop: -40,
    borderTopRightRadius: 450,
    borderTopLeftRadius: 450,
  },

  // Estilização do FooterDireita
  footerDireita: {
    height: '100%',
    backgroundColor: '#24c28d',
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ScrollTamanho: {
    backgroundColor: '#24c28d',
  },

  ConteudoPlantas: {
    height: '35%',
    width: '100%',
    backgroundColor: '#eaead4',
  },

  DivInforma: {
    height: window.height * 0.19,
    width: '100%',
    marginTop: 10,
    borderRadius: 25,
    borderColor: '#24c28d',
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  header_imagem_um: {
    marginLeft: 20,
    height: '130px',
    width: '130px',
    backgroundColor: '#eaead4',
    borderRadius: 25,
    borderColor: '#24c28d',
    borderWidth: 3,
  },
  
  imgPlantas: {
    borderRadius: 25,
  },

  InformaTextoDiv: {
    height: '80%',
    flex: 1,
  },

  Textotitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8b8a7a',
    marginLeft: 30,
  },

  TextoDescricao: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#8b8a7a',
    marginLeft: 30,
  },

  linha: {
    backgroundColor: '#8b8a7a',
    height: 1,
    width: '90%',
    alignSelf: 'center',
    margin: 10,
    justifyContent: 'flex-end',
  },

  bola: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#24c28d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    fontSize: 24,
    color: 'white',
  },
});

function Header() {
  return (
    <View style={styles.Header}></View>
  );
}

function Body() {
  return (
    <View style={styles.Body}>
      <View style={styles.ConteudoPlantas}>
        <View style={styles.DivInforma}>
          <View style={styles.header_imagem_um}>
            <Image style={styles.imgPlantas} source={require('./fotosplantas/dipla.png')} alt="Descrição da imagem" />
          </View>
          <View style={styles.InformaTextoDiv}>
            <Text style={styles.Textotitulo}>Zamioculca</Text>
            <Text style={styles.TextoDescricao}>
              A Zamioculca é uma planta originária da Tanzânia, na África.
              Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.
            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>
        <View style={styles.DivInforma}>
          <View style={styles.header_imagem_um}>
            <Image style={styles.imgPlantas} source={require('./fotosplantas/espa.png')} />
          </View>
          <View style={styles.InformaTextoDiv}>
            <Text style={styles.Textotitulo}>Zamioculca</Text>
            <Text style={styles.TextoDescricao}>
              A Zamioculca é uma planta originária da Tanzânia, na África.
              Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.
            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>
        <View style={styles.DivInforma}>
          <View style={styles.header_imagem_um}>
            <Image style={styles.imgPlantas} source={require('./fotosplantas/pepe.png')} alt="Descrição da imagem" />
          </View>
          <View style={styles.InformaTextoDiv}>
            <Text style={styles.Textotitulo}>Zamioculca</Text>
            <Text style={styles.TextoDescricao}>
              A Zamioculca é uma planta originária da Tanzânia, na África.
              Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.
            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>
        <View style={styles.DivInforma}>
          <View style={styles.header_imagem_um}>
            <Image style={styles.imgPlantas} source={require('./fotosplantas/zami.png')} alt="Descrição da imagem" />
          </View>
          <View style={styles.InformaTextoDiv}>
            <Text style={styles.Textotitulo}>Zamioculca</Text>
            <Text style={styles.TextoDescricao}>
              A Zamioculca é uma planta originária da Tanzânia, na África.
              Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.
            </Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.Footer}>
      <TouchableOpacity style={styles.footerEsquerda}>
        <FontAwesome
          name='home'
          size={60}
          color='#8b8a7a'
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerMeio}>
        <FontAwesome
          name='user'
          size={65}
          color='#8b8a7a'
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerDireita}>
        <FontAwesome
          name='star'
          size={60}
          color='#8b8a7a'
        />
      </TouchableOpacity>
    </View>
  );
}
