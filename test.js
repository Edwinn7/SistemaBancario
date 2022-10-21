function UserScreen({ navigation }) {
    const [User, setUser] = useState('');
    const [rol, setRol] = useState('');
    const [passwd, setPasswd] = useState('');
  
    const validate = () => {
      if (passwd == "a") {
        setPasswd("");
        setUser("")
        navigation.navigate('Account', { User: User })
      }
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={styles.inputs}
          placeholder="Usuario"
          onChangeText={value => setUser(value)}
          value={User}
        />
        <TextInput
  
          style={styles.inputs}
          placeholder="Rol"
          onChangeText={value => setRol(value)}
          value={rol}
        />
        <TextInput
  
          style={styles.inputs}
          placeholder="Contrasena"
          onChangeText={value => setPasswd(value)}
          value={passwd}
        />
        <Button
          title="Iniciar Sesion"
          //onPress={() => navigation.navigate('Settings')}
          //onPress={validate}
          onPress={() => {
            if (passwd == "a") {
              setUser("")
              setRol("")
              setPasswd("");
              navigation.navigate('Account', { User: User })
            }
          }}
  
        />
      </View>
    );
  }
  



const nombre = [1,2,3,4,5,6,7,8,9];
const aleatorio = nombre[Math.floor(Math.random() * nombre.length)];
console.log(aleatorio)
