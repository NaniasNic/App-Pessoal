import { Text, Image, View, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import perfil from "../../assets/perfil.jpg";
import lin from "../../assets/linkedin.webp";
import git from "../../assets/git.webp";

export function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={perfil}
        style={styles.logo}
      />

      <Text style={styles.name}>
        Ananias Nicolau
      </Text>

      <Text style={styles.sub}>
        Sou Desenvolvedor Front-end em busca de conhecimento e melhorias nas minhas habilidades,
        atualmente trabalho como Freelancer, sou certificado pelo curso da Start(LATAM) e estudo
        de forma autônoma.
      </Text>

      <View style={styles.perfil}>
        <TouchableOpacity onPress={() => Linkedin()}>
          <Image 
            source={lin}
            style={styles.perfis}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => GitHub()}>
          <Image 
            source={git}
            style={styles.perfis}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Linkedin() {
  Linking.openURL('https://www.linkedin.com/in/naniasnic/')
}

function GitHub() {
  Linking.openURL('https://github.com/NaniasNic')
}