// import React from 'react';
// import Welcome from '../Welcome/Welcome';
// import Scanner from '../Scanner/Scanner';
// import Product from '../Product/Product';
// import { useSelector } from 'react-redux';
// import UserSettings from '../User/UserSettings';
// import LockerUnlock from '../Locker/LockerUnlock';
// import LockerThanks from '../Locker/LockerThanks';
// import Evaluation from '../Evaluation/Evaluation';
// import LockerReturn from '../Locker/LockerReturn';
// import { tuimHeader } from '../Design/commonStyle';
// import ProductDetail from '../Product/ProductDetail';
// import ProductMyList from '../Product/ProductMyList';
// import { createStackNavigator } from '@react-navigation/stack';
// import PaymentCardRegister from '../Payment/PaymentCardRegister';

// const Stack = createStackNavigator();

// export default function LoggedIn() {

//     const { logged } = useSelector(state => state.login)

//     return (
//         <Stack.Navigator
//             initialRouteName="Welcome"
//         >
//             <Stack.Screen
//                 name='Welcome'
//                 component={Welcome}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name='Scanner'
//                 component={Scanner}
//                 options={{
//                     ...tuimHeader,
//                     animationTypeForReplace: logged ? 'push' : 'pop'
//                 }}
//             />
//             <Stack.Screen
//                 name='Product'
//                 component={Product}
//                 options={tuimHeader}
//             />
//             <Stack.Screen
//                 name='ProductDetail'
//                 component={ProductDetail}
//                 options={tuimHeader}
//             />
//             <Stack.Screen
//                 name='ProductMyList'
//                 component={ProductMyList}
//                 options={tuimHeader}
//             />
//             <Stack.Screen
//                 name='UserSettings'
//                 component={UserSettings}
//                 options={tuimHeader}
//             />
//             <Stack.Screen
//                 name='PaymentCardRegister'
//                 component={PaymentCardRegister}
//                 options={tuimHeader}
//             />
//             <Stack.Screen
//                 name='LockerUnlock'
//                 component={LockerUnlock}
//                 options={tuimHeader}
//             />
//             <Stack.Screen
//                 name='LockerThanks'
//                 component={LockerThanks}
//                 options={tuimHeader}
//             />
//             <Stack.Screen
//                 name='LockerReturn'
//                 component={LockerReturn}
//                 options={tuimHeader}
//             />
//             <Stack.Screen
//                 name='Evaluation'
//                 component={Evaluation}
//                 options={tuimHeader}
//             />
//         </Stack.Navigator>
//     )
// }
