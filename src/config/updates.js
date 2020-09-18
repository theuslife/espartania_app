
import * as Updates from 'expo-updates';
import { AlertEspartania } from '../components/Design/Alerts';
import axios from 'axios';

// -- Para quando tiver o primeiro build do app na loja --
// import tuimAppJson from '../../app.json'
// const { version, android } = appJson.expo
// const { versionCode: androidVersion } = android

/**
  * @checkExpoServerUpdate - Observa se há uma nova atualização nos servidores do expo, 
  *                          realiza o download caso tenha, alerta o usuário logo em sequida e 
  *                          reinicia o app quando usuário confirmar
*/
export const checkExpoServerUpdate = async () => {

    //Development mode
    if (__DEV__)
        return

    //Production Mode
    const { isAvailable } = await Updates.checkForUpdateAsync()

    if (isAvailable) {

        const { isNew } = await Updates.fetchUpdateAsync()

        if (isNew) {
            AlertEspartania('Nova versão do aplicativo disponível, seu aplicativo será reiniciado', async () =>
                await Updates.reloadAsync()
            )
        }

    }

}

/**
  * @checkAppStoreUpdate - Verifica se nas lojas (appstore e playstore) há uma atualização na qual não foi feita automática 
  *                        pelo expo, caso exista damos a opção do usuário ir para a loja atualizar o aplicativo por lá
  *                         
*/
export const checkAppStoreUpdate = async () => {

    const url = `Config.json`; //Aqui pegamos um json da API da Tuim para sabermos a versão que se encontra o APP

    try {

        const { data } = await axios.get(url);

        //Faremos aqui a lógica para checkar se a versão do server e do aparelho estão pareadas
        const { version: newVersion = null, androidVersion: newAndroidVersion = null } = data

        const platform = Platform.OS

        if (checkVersion) {

            if (platform === 'ios') {
                // Verifica versão do IOS
            } else {
                // Verifica versão do Android
            }

        } else {
            // ...
        }

    } catch (error) {
        
        return error;

    }

}