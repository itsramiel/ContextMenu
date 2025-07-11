import { StyleSheet, Text, View } from 'react-native';
import { ContextMenuView } from 'react-native-ios-context-menu';

function App() {
  return (
    <View style={styles.container}>
      <ContextMenuView
        menuConfig={{
          menuTitle: 'ContextMenuViewExample18',
          menuItems: [
            {
              actionKey: 'key-01',
              actionTitle: 'Action #1',
            },
            {
              actionKey: 'key-02',
              actionTitle: 'Action #2',
            },
          ],
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
      </ContextMenuView>
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
