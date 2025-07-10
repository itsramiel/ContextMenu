import { StyleSheet, Text, View } from 'react-native';
import ContextMenu from 'react-native-context-menu-view';

function App() {
  return (
    <View style={styles.container}>
      <ContextMenu
        actions={[{ title: 'Title 1' }, { title: 'Title 2' }]}
        onPress={e => {
          console.warn(
            `Pressed ${e.nativeEvent.name} at index ${e.nativeEvent.index}`,
          );
        }}
      >
        <View style={styles.card}>
          <Text>Lorem ipsum dolor sit amet</Text>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Text>
        </View>
      </ContextMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: 'gray',
  },
});

export default App;
