import {Text, View,TextInput,TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function form() {
  // Definir los datos del formulario que se validara
  const{control,handleSubmit,formState: {errors}}= useForm({
    defaultValues:{
      fullname:'',
      email:'',
      password:'',
      salary:''
    }
  })
  // definir el metodo para mostrar los datos cuando sean validos
  const onSubmit = data => console.log(data)
  function limpiar(){
    
  }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          maxLength:30,
          minLength:3
        }}
        render={({field: {onChange,onBlur,value}})=>(
          <TextInput
            style={[styles.inputs,{borderColor:errors.fullname?.type == "required" || errors.fullname?.type == "pattern" || errors.fullname?.type=="maxLength" || errors.fullname?.type == "minLength" ?'red' :'blue'}]}
            placeholder="Nombre Completo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='fullname'
      />
      {errors.fullname?.type == "required" && <Text style={{color:"red"}}>El nombre es obligatorio</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{color:"red"}}>El nombre no puede exceder de 30 caracteres</Text>}
      {errors.fullname?.type == "minLength" && <Text style={{color:"red"}}>El nombre debe tener minimo 3 caracteres</Text>}
      {errors.fullname?.type == "pattern" && <Text style={{color:"red"}}>El nombre solo puede tener letras y/o espacios</Text>}


      <Controller
        control={control}
        rules={{
          required:true,
          pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        }}
        render={({field: {onChange,onBlur,value}})=>(
          <TextInput
            style={[styles.inputs,{borderColor:errors.email?.type == "required" || errors.email?.type == "pattern" || errors.email?.type=="maxLength" || errors.email?.type == "minLength" ?'red' :'blue'}]}
            placeholder="Correo electronico"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='email'
      />
      {errors.email?.type == "required" && <Text style={{color:"red"}}>El correo es obligatorio</Text>}
      {errors.email?.type == "pattern" && <Text style={{color:"red"}}>El correo no es valido</Text>}

      <Controller
        control={control}
        rules={{
          required:true,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
          maxLength:15,
          minLength:8
        }}
        render={({field: {onChange,onBlur,value}})=>(
          <TextInput
            style={[styles.inputs,{borderColor:errors.password?.type == "required" || errors.password?.type == "pattern" || errors.password?.type=="maxLength" || errors.password?.type == "minLength" ?'red' :'blue'}]}
            placeholder="Contraseña"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={true}
          />
        )}
        name='password'
      />
      {errors.password?.type == "required" && <Text style={{color:"red"}}>La contraseña es obligatoria</Text>}
      {errors.password?.type == "maxLength" && <Text style={{color:"red"}}>La contraseña no puede exceder de 15 digitos</Text>}
      {errors.password?.type == "minLength" && <Text style={{color:"red"}}>La contraseña debe tener minimo 8 digitos</Text>}
      {errors.password?.type == "pattern" && <Text style={{color:"red"}}>La contraseña debe tener al menos una letra mayúscula,una letra minuscula,menos un dígito, 1 caracter especial y sin espacios en blanco</Text>}

      <Controller
        control={control}
        rules={{
          required:true,
          pattern: /^\d{1,3}(\.\d{1,3})?$/,
          maxLength:100000000,
          minLength:1
        }}
        render={({field: {onChange,onBlur,value}})=>(
          <TextInput
            style={[styles.inputs,{borderColor:errors.salary?.type == "required" || errors.salary?.type == "pattern" || errors.salary?.type=="maxLength" || errors.salary?.type == "minLength" ?'red' :'blue'}]}
            placeholder="Salario"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='salary'
      />
      {errors.salary?.type == "required" && <Text style={{color:"red"}}>El salario es obligatorio</Text>}
      {errors.salary?.type == "pattern" && <Text style={{color:"red"}}>El salario solo puede tener números</Text>}

      <TouchableOpacity
        style={{backgroundColor:'blue',borderRadius:10,padding:5,width:180,marginTop:10}}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{color:'white',textAlign:'center'}}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{backgroundColor:'blue',borderRadius:10,padding:5,width:180,marginTop:10}}
      onPress={limpiar}      
      >
        <Text style={{color:'white',textAlign:'center'}}>Limpiar</Text>
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputs:{
//     padding:10,
//     borderRadius:10,
//     color:'black',
//     marginBottom:5,
//     borderWidth:1,
//     borderColor:'blue'
//   }
// });




{/* <View style={styles.container}>
<Controller
  control={control}
  rules={{
    required:true,
    pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
    maxLength:30,
    minLength:3
  }}
  render={({field: {onChange,onBlur,value}})=>(
    <TextInput
      style={[styles.inputs,{borderColor:errors.fullname?.type == "required" || errors.fullname?.type == "pattern" || errors.fullname?.type=="maxLength" || errors.fullname?.type == "minLength" ?'red' :'blue'}]}
      placeholder="Nombre Completo"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  )}
  name='fullname'
/>
{errors.fullname?.type == "required" && <Text style={{color:"red"}}>El nombre es obligatorio</Text>}
{errors.fullname?.type == "maxLength" && <Text style={{color:"red"}}>El nombre no puede exceder de 30 caracteres</Text>}
{errors.fullname?.type == "minLength" && <Text style={{color:"red"}}>El nombre debe tener minimo 3 caracteres</Text>}
{errors.fullname?.type == "pattern" && <Text style={{color:"red"}}>El nombre solo puede tener letras y/o espacios</Text>}
<TouchableOpacity
  style={{backgroundColor:'blue',borderRadius:10,padding:5,width:180,marginTop:10}}
  onPress={handleSubmit(onSubmit)}
>
  <Text style={{color:'white',textAlign:'center'}}>Enviar</Text>
</TouchableOpacity>
<TouchableOpacity
style={{backgroundColor:'blue',borderRadius:10,padding:5,width:180,marginTop:10}}
onPress={limpiar}      
>
  <Text style={{color:'white',textAlign:'center'}}>Limpiar</Text>
</TouchableOpacity>
</View> */}




{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
</View> */}
