import { INTERSTETIAL_ID_ANDROID, INTERSTETIAL_ID_IOS } from 'react-native-dotenv';
import { AdMobInterstitial } from 'expo'
import { Platform } from 'react-native';

const interstetialId = Platform.OS === 'ios' ? INTERSTETIAL_ID_IOS : INTERSTETIAL_ID_ANDROID;

AdMobInterstitial.setAdUnitID(interstetialId);

const AdService = {
    async _openInterstitial() {
        console.log('called');
        console.log(interstetialId);
        try {
            await AdMobInterstitial.requestAdAsync()
            await AdMobInterstitial.showAdAsync()
        } catch (error) {
            console.error(error)
        } finally {
            // do something
        }
    }
}

export default AdService;