import { ListChecks } from 'lucide-react-native';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const handleInput = (e) => {
    setInput(e)
  }

  const handleOnPress = () => {
    setList([...list, input])
  }

  const handleOnDelete = () => {
    setList([])
  }

  // Todo Rajouter une confirmation de suppression
  // Style Modal ou autre.

  console.log(list)

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <ListChecks size={48} />
        </View>
        <Text style={styles.title}>Check List IOS</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Ajouter un article'
          onChangeText={handleInput}
          />
        <Button
          title='Ajouter'
          onPress={handleOnPress}
        />
      </View>
      <View>
        <Text style={styles.listTitle}>Liste de course</Text>
        <View style={styles.flatList}>
          <FlatList
            data={list}
            style={styles.list}
            renderItem={({item}) => (
              <View style={styles.itemCard}>
                <Text>{item}</Text>
              </View>
            )}
          />
        </View>
        <TouchableOpacity onPress={handleOnDelete} style={styles.button}>
          <Text style={styles.buttonText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    padding: 45
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 70
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '4px',
    borderColor: '#007AFF',
    padding: 20,
    borderRadius: '50%',
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    color: '#007AFF',
  },
  flatList: {
    height: 400
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  listTitle: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    color: '#007AFF',
  },
  list: {
    paddingBottom: 100
  },
  itemCard: {
    borderColor: '#d8ebff',
    borderEndColor: '#FFF',
    borderStartColor: '#FFF',
    borderBlockStartColor: '#FFF',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  button: {
    backgroundColor: '#ff3b30', // Rouge dans le style iOS
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
