import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../screens/product-screen/Products';
import { RootStackParamList } from './interface';
import ProductDetails from '../screens/product-details/ProductDetails';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigationContainer: React.FC<{}> = function AppNavigationContainer() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={Products}  />
                <Stack.Screen name="ProductDetails" component={ProductDetails} options={{
                    headerTitle: '',
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigationContainer;

const styles = StyleSheet.create({
    badge: {
      position: 'absolute',
      right: 9,
      top: -1,
      backgroundColor: 'orange',
      borderRadius: 8,
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeText: {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
    },
  });