import { FlatList, View, Image, Text } from "react-native";
import { styles } from "./styles";

export function Carrossel({data}) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item)}
      horizontal
      renderItem={({ item }) =>
        <View style={styles.container}>
          <Image
            source={item.image}
            style={styles.logo}
          />

          <Text style={styles.name}>
            {item.name}
          </Text>
        </View>
      }
    />

  );
}