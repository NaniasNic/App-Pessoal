import { FlatList, View, Image, Text } from "react-native";
import { styles } from "./styles";

export function Projetos() {
    const projeto = [
        {
            "job": require('../../assets/insta.png')
        },
        {
            "job": require('../../assets/start.png')
        },
        {
            "job": require('../../assets/liiii.png')
        },
        {
            "job": require('../../assets/barbearia.png')
        },
        {
            "job": require('../../assets/api.png')
        },
        {
            "job": require('../../assets/nlw.png')
        }
    ]

  return (
    <FlatList
      data={projeto}
      keyExtractor={item => String(item)}
      horizontal
      renderItem={({ item }) =>
        <View style={styles.container}>
          <Image
            source={item.job}
            style={styles.logo}
          />
        </View>
      }
    />

  );
}