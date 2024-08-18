import { registerRootComponent } from 'expo';
import TrackPlayer from 'react-native-track-player';
import App from './src/App';
import { playBackService } from './service';

registerRootComponent(App);
TrackPlayer.registerPlaybackService(() => playBackService);