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
    console.log(data)
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

function AccountScreen({ route }) {
  // Definir los datos del formulario que se validara
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullname: ''
    }
  })
  // definir el metodo para mostrar los datos cuando sean validos
  const onSubmit = data => console.log(data)
  return (
    <View style={styles.container}>
      <Text>Bienvenido: {route.params.data}</Text>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.numbAcc?.type == "required" || errors.numbAcc?.type == "pattern" || errors.numbAcc?.type == "maxLength" || errors.numbAcc?.type == "minLength" ? 'red' : 'blue' }]}
            placeholder="Numero de cuenta"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='numbAcc'
      />
      {errors.numbAcc?.type == "required" && <Text style={{ color: "red" }}>El nombre es obligatorio</Text>}
      {errors.numbAcc?.type == "pattern" && <Text style={{ color: "red" }}>El nombre solo puede tener letras y/o espacios</Text>}
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.identf?.type == "required" || errors.identf?.type == "pattern" || errors.identf?.type == "maxLength" || errors.identf?.type == "minLength" ? 'red' : 'blue' }]}
            placeholder="Identificacion"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='identf'
      />
      {errors.identf?.type == "required" && <Text style={{ color: "red" }}>El nombre es obligatorio</Text>}
      {errors.identf?.type == "pattern" && <Text style={{ color: "red" }}>El nombre solo puede tener letras y/o espacios</Text>}
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.accountOwner?.type == "required" || errors.accountOwner?.type == "pattern" || errors.accountOwner?.type == "maxLength" || errors.accountOwner?.type == "minLength" ? 'red' : 'blue' }]}
            placeholder="Titular de la Cuenta"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='accountOwner'
      />
      {errors.accountOwner?.type == "required" && <Text style={{ color: "red" }}>El nombre es obligatorio</Text>}
      {errors.accountOwner?.type == "pattern" && <Text style={{ color: "red" }}>El nombre solo puede tener letras y/o espacios</Text>}
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.date?.type == "required" || errors.date?.type == "pattern" || errors.date?.type == "maxLength" || errors.date?.type == "minLength" ? 'red' : 'blue' }]}
            placeholder="Fecha"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='date'
      />
      {errors.date?.type == "required" && <Text style={{ color: "red" }}>El nombre es obligatorio</Text>}
      {errors.date?.type == "pattern" && <Text style={{ color: "red" }}>El nombre solo puede tener letras y/o espacios</Text>}
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputs, { borderColor: errors.balance?.type == "required" || errors.balance?.type == "pattern" || errors.balance?.type == "maxLength" || errors.balance?.type == "minLength" ? 'red' : 'blue' }]}
            placeholder="Saldo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='balance'
      />
      {errors.balance?.type == "required" && <Text style={{ color: "red" }}>El nombre es obligatorio</Text>}
      {errors.balance?.type == "pattern" && <Text style={{ color: "red" }}>El nombre solo puede tener letras y/o espacios</Text>}
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
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {/* tabBarStyle: desactiva el menú bottom */}
      <Tab.Screen
        name="Usuario"
        component={UserScreen}
        options={{
          title: 'Inicio de Sesion', tabBarStyle: { display: "none" }, tabBarIcon: (color, size) =>
            (<Ionicons name="log-in-outline" color={'blue'} size={25} />)
        }} />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Cuentas', tabBarIcon: (color, size) =>
            (<Ionicons name="person-circle-outline" color={'blue'} size={25} />)
        }}
      />

      <Tab.Screen
        name="Balance"
        component={BalanceScreen}
        options={{
          title: 'Movimientos', tabBarIcon: (color, size) =>
            (<Ionicons name="list-circle-outline" color={'blue'} size={25} />)
        }} />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ title: 'Sistema Bancario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    marginBottom: 5
  }
});