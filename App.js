import { StyleSheet, Text, Button, View, TextInput, Picker, Switch, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
//import form from './Components/form.js';

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
    console.log(data.User)
    navigation.navigate('Account', { User: User })
  }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern:/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.User?.type == "required" || errors.User?.type == "pattern" || errors.User?.type == "maxLength" || errors.User?.type == "minLength" ? 'red' : '#df4a43' }]}
            placeholder="Usuario"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='User'
      />
      {errors.User?.type == "required" && <Text style={{ color: "#df4a43" }}>El usuario es obligatorio</Text>}
      {errors.User?.type == "pattern" && <Text style={{ color: "#df4a43" }}>El usuario debe contener solo letras</Text>}
      {/* --------------------------- */}
      <Controller
        control={control}
        rules={{
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.rol?.type == "required" || errors.rol?.type == "pattern" || errors.rol?.type == "maxLength" || errors.rol?.type == "minLength" ? 'red' : '#df4a43' }]}
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
            style={[styles.inputs, { borderColor: errors.passwd?.type == "required" || errors.passwd?.type == "pattern" || errors.passwd?.type == "maxLength" || errors.passwd?.type == "minLength" ? 'red' : '#df4a43' }]}
            placeholder="Contraseña"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={true}
          />
        )}
        name='passwd'
      />
      {errors.passwd?.type == "required" && <Text style={{ color: "#df4a43" }}>La contraseña es obligatoria</Text>}
      {errors.passwd?.type == "pattern" && <Text style={{ color: "#df4a43" }}>La contraseña debe tener al menos una letra mayúscula,una letra minuscula,menos un dígito, 1 caracter especial y sin espacios en blanco</Text>}





      <TouchableOpacity
        style={{ backgroundColor: '#df4a43', borderRadius: 10, padding: 5, width: 180, marginTop: 10 }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Iniciar Sesion</Text>
      </TouchableOpacity>

    </View>
  );
}

function AccountScreen({route}) {
  const [numbAcc, setNumAcc] = useState('');
  const [identf, setIdentf] = useState('');
  const [accountOwner, setAccountOwner] = useState('');
  const [date, setDate] = useState('');
  const [balance, setBalance] = useState('');

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      numbAcc: '',
      identf: '',
      accountOwner: '',
      date: '',
      balance: ''
    }
  })
  // definir el metodo para mostrar los datos cuando sean validos
  const onSubmit2 = data2 => {
    console.log(data2)
    return (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ marginRight: 10 }}>{data2.accountOwner}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Bienvenido: {}</Text>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.numbAcc?.type == "required" || errors.numbAcc?.type == "pattern" || errors.numbAcc?.type == "maxLength" || errors.numbAcc?.type == "minLength" ? 'red' : '#df4a43' }]}
            placeholder="Numero de cuenta"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='numbAcc'
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern:/^[0-9]+$/g
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.identf?.type == "required" || errors.identf?.type == "pattern" || errors.identf?.type == "maxLength" || errors.identf?.type == "minLength" ? 'red' : '#df4a43' }]}
            placeholder="Identificacion"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='identf'
      />
      {errors.identf?.type == "required" && <Text style={{ color: "#df4a43" }}>La identificación es obligatoria</Text>}
      {errors.identf?.type == "pattern" && <Text style={{ color: "#df4a43" }}>La identificación solo puede contener números</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
          pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.accountOwner?.type == "required" || errors.accountOwner?.type == "pattern" || errors.accountOwner?.type == "maxLength" || errors.accountOwner?.type == "minLength" ? 'red' : '#df4a43' }]}
            placeholder="Titular de la Cuenta"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='accountOwner'
      />
      {errors.accountOwner?.type == "required" && <Text style={{ color: "#df4a43" }}>El titular de la cuenta es obligatorio</Text>}
      {errors.accountOwner?.type == "pattern" && <Text style={{ color: "#df4a43" }}>El nombre del titular solo puede tener letras y/o espacios</Text>}
      <Controller
        control={control}
        rules={{
          required: false,
          pattern:/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.date?.type == "required" || errors.date?.type == "pattern" || errors.date?.type == "maxLength" || errors.date?.type == "minLength" ? 'red' : '#df4a43' }]}
            placeholder="Fecha"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='date'
      />
      {errors.date?.type == "pattern" && <Text style={{ color: "#df4a43" }}>El formato de fecha es dd/mm/aaaa </Text>}
      <Controller
        control={control}
        rules={{
          required: false,
          pattern:/^[0-9]{1,2}$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.balance?.type == "required" || errors.balance?.type == "pattern" || errors.balance?.type == "maxLength" || errors.balance?.type == "minLength" ? 'red' : '#df4a43' }]}
            placeholder="Saldo (en millones)"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='balance'
      />
      {errors.balance?.type == "pattern" && <Text style={{ color: "#df4a43" }}>Solo se admite números entre 1 y 100 millones</Text>}
      <TouchableOpacity
        style={{ backgroundColor: '#df4a43', borderRadius: 10, padding: 5, width: 180, marginTop: 10 }}
        onPress={handleSubmit(onSubmit2)}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Enviar</Text>
      </TouchableOpacity>

    </View>


  );
}

function BalanceScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>Movimientos</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Configuración</Text>
      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Feed')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarInactiveBackgroundColor:'#df4a43',
        tabBarActiveBackgroundColor:'white',
        textAlign:'center'
      }}
    >
      {/* tabBarStyle: desactiva el menú bottom */}
      <Tab.Screen
        name="Usuario"
        component={UserScreen}
        options={{
          title: 'Inicio de Sesion', tabBarStyle: { display: "none" }, tabBarIcon: (color, size) =>
            (<Ionicons name="log-in-outline" color={'#43d8df'} size={30} />)
        }} />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Cuentas', tabBarIcon: (color, size) =>
            (<Ionicons name="person-circle-outline" color={'#43d8df'} size={30} />)
        }}
      />

      <Tab.Screen
        name="Balance"
        component={BalanceScreen}
        options={{
          title: 'Movimientos', tabBarIcon: (color, size) =>
            (<Ionicons name="list-circle-outline" color={'#43d8df'} size={30} />)
        }} />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ title: 'Sistema Bancario'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    borderWidth: 1,
    borderRadius: 10,
    color:'black',
    padding: 10,
    textAlign: 'center',
    marginBottom: 5
  }
});