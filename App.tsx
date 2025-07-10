import { StyleSheet, Text, View } from 'react-native';
import {
  ContextMenuProvider,
  ContextMenuContainer,
} from '@brnho/react-native-context-menu';

function App() {
  return (
    <ContextMenuProvider>
      <View style={styles.container}>
        <ContextMenuContainer
          menuItems={[
            { text: 'Action', isTitle: true },
            {
              text: 'Edit',
              icon: {
                type: 'Feather',
                name: 'edit',
                size: 18,
              },
              onPress: () => {},
            },
            {
              text: 'Delete',
              icon: {
                type: 'Feather',
                name: 'trash',
                size: 18,
              },
              withSeparator: true,
              isDestructive: true,
              onPress: () => {},
            },
          ]}
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
        </ContextMenuContainer>
      </View>
    </ContextMenuProvider>
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
