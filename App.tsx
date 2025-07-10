import { StyleSheet, Text, View } from 'react-native';
import { PortalHost } from '@rn-primitives/portal';
import * as ContextMenuPrimitive from '@rn-primitives/context-menu';

function App() {
  return (
    <View style={styles.container}>
      <ContextMenuPrimitive.Root>
        <ContextMenuPrimitive.Trigger>
          <View style={styles.card}>
            <Text>Lorem ipsum dolor sit amet</Text>
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
        </ContextMenuPrimitive.Trigger>
        <ContextMenuPrimitive.Content>
          <ContextMenuPrimitive.Item>
            <Text>Back</Text>
          </ContextMenuPrimitive.Item>
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Root>
      <PortalHost />
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
