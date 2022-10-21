function userScreen({ navigation }) {
    const [users,setUsers]= useState([]);
    const [user, setUser] = useState('');
    const [rol, setRol] = useState('');
    const [passwd, setPasswd] = useState('');
    let refuser = useRef()
    const onSubmit = () => {
      //Agregar datos al array a través del método setSalarios para el array salarios
      setUsers(myusers => [...myusers,{user:user,rol:rol,passwd:passwd}] );
      setUser('');
      setRol('')
      setPasswd('')
      refuser.current.focus();
    }
  
  
    const validate = () => {
      if (passwd == "a") {
        setPasswd("");
        setUser("")
        navigation.navigate('Account', { user: user })
      }
    }
    const { control, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        user: '',
        rol: '',
        passwd: ''
      }
    })
    // const onSubmit = data => console.log(data)
    return (
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.inputs, { borderColor: errors.user?.type == "required" || errors.user?.type == "pattern" || errors.user?.type == "maxLength" || errors.user?.type == "minLength" ? 'red' : 'blue' }]}
              placeholder="Usuario"
              onChangeText={user => setUser(user)}
              onBlur={onBlur}
              value={user}
            />
          )}
          name='user'
        />
        {errors.user?.type == "required" && <Text style={{ color: "red" }}>El nombre es obligatorio</Text>}
        {/* --------------------------- */}
        <Controller
          control={control}
          rules={{
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.inputs, { borderColor: errors.rol?.type == "required" || errors.rol?.type == "pattern" || errors.rol?.type == "maxLength" || errors.rol?.type == "minLength" ? 'red' : 'blue' }]}
              placeholder="Rol"
              onChangeText={rol => setRol(rol)}
              onBlur={onBlur}
              value={rol}
            />
          )}
          name='rol'
        />
        <Controller
          control={control}
          rules={{
            required: true,
            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.inputs, { borderColor: errors.passwd?.type == "required" || errors.passwd?.type == "pattern" || errors.passwd?.type == "maxLength" || errors.passwd?.type == "minLength" ? 'red' : 'blue' }]}
              placeholder="Contraseña"
              onChangeText={passwd => setPasswd(passwd)}
              onBlur={onBlur}
              value={passwd}
              secureTextEntry={true}
            />
          )}
          name='passwd'
        />
        {errors.passwd?.type == "required" && <Text style={{ color: "red" }}>La contraseña es obligatoria</Text>}
        {errors.passwd?.type == "pattern" && <Text style={{ color: "red" }}>La contraseña debe tener al menos una letra mayúscula,una letra minuscula,menos un dígito, 1 caracter especial y sin espacios en blanco</Text>}
  
  
  
  
  
        <TouchableOpacity
          style={{ backgroundColor: 'blue', borderRadius: 10, padding: 5, width: 180, marginTop: 10 }}
          onPress={onSubmit}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Iniciar Sesion</Text>
        </TouchableOpacity>
  
      </View>
    )
}  