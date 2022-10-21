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
    const { control, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        User: '',
        rol: '',
        passwd: ''
      }
    })
    const onSubmit = data => {
      console.log(data.rol)
      navigation.navigate('Account', { User: User })
    }
    return (
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.inputs, { borderColor: errors.User?.type == "required" || errors.User?.type == "pattern" || errors.User?.type == "maxLength" || errors.User?.type == "minLength" ? 'red' : 'blue' }]}
              placeholder="Usuario"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name='User'
        />
        {errors.User?.type == "required" && <Text style={{ color: "red" }}>El nombre es obligatorio</Text>}
        {/* --------------------------- */}
        <Controller
          control={control}
          rules={{
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.inputs, { borderColor: errors.rol?.type == "required" || errors.rol?.type == "pattern" || errors.rol?.type == "maxLength" || errors.rol?.type == "minLength" ? 'red' : 'blue' }]}
              placeholder="Rol"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
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
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={true}
            />
          )}
          name='passwd'
        />
        {errors.passwd?.type == "required" && <Text style={{ color: "red" }}>La contraseña es obligatoria</Text>}
        {errors.passwd?.type == "pattern" && <Text style={{ color: "red" }}>La contraseña debe tener al menos una letra mayúscula,una letra minuscula,menos un dígito, 1 caracter especial y sin espacios en blanco</Text>}
  
  
  
  
  
        <TouchableOpacity
          style={{ backgroundColor: 'blue', borderRadius: 10, padding: 5, width: 180, marginTop: 10 }}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Iniciar Sesion</Text>
        </TouchableOpacity>
  
      </View>
    );
  }
  