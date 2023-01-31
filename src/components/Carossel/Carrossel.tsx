import { FlatList, View, Image, Text } from "react-native";
import { styles } from "./styles";

export function Carrossel() {
  const data = [
    {
      image: require('../../assets/html5.webp'),
      name: "Html5"
    },
    {
      image: require('../../assets/css.webp'),
      name: "Css3"
    },
    {
      image: require('../../assets/js.webp'),
      name: "JavaScript"
    },
    {
      image: require('../../assets/react.webp'),
      name: "React"
    },
    {
      image: require('../../assets/ts.webp'),
      name: "TypeScript"
    }
  ]

  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item)}
      horizontal
      renderItem={({ item }) =>
        <View>
          <Image
            source={item.image}
            style={styles.logo}
          />

          <Text>
            {item.name}
          </Text>
        </View>
      }
    />

  );
}