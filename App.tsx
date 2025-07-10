import { StyleSheet, Text, View } from 'react-native';
import * as ContextMenu from 'zeego/context-menu';

function App() {
  return (
    <View style={styles.container}>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <View style={styles.card}>
            <Text>Lorem ipsum dolor sit amet</Text>
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Label />
          <ContextMenu.Item key="1">
            <ContextMenu.ItemTitle>Item 1</ContextMenu.ItemTitle>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
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
