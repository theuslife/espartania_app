// import AppLink from 'react-native-app-link';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications  from 'expo-notifications';

/**
  * @getNotificationsParams - Retorna os dados importantes para o envio de notificações                       
*/
export const getNotificationsParams = async () => {

    const installationId = await Constants.installationId ? Constants.installationId : Constants.deviceId

    const deviceName = await Constants.deviceName

    const pushToken = await registerForPushNotificationsAsync()

    return {
        installationId,
        deviceName,
        pushToken
    }

}

/**
  * @getNotificationsParams - Da um alert ao usuário perguntando se ele aceita que enviamos notificações para o
  *                           dispositivo dele e então guardamos esta informação. Caso o usuário aceite pegamos o PushToken e
  *                           retornamos                        
*/
export const registerForPushNotificationsAsync = async () => {

    //Pega se o usuário já aceitou ou não nossa permissão
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );

    let finalStatus = existingStatus;

    //Caso seja a primeira vez do usuário no aplicativo entramos nesta condição para pedir a permissão
    if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    if (finalStatus !== 'granted') {
        return null;
    }

    try {
        let token = await Notifications.getExpoPushTokenAsync();
        return token;
    } catch (error) {
        console.log('Erro no request async, função: { registerForPushNotificationsAsync } ');
        return
    }

}