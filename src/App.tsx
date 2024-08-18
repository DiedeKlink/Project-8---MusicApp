import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
//import * as SystemUI from 'expo-system-ui';
import Wtext from '@/components/Wtext';

import { setupPlayer, addTrack } from '../service'
import { StatusBar } from 'expo-status-bar';
import MusicPlayer from './screens/MusicPlayer';


export default function App() {

  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup(){
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  
 // SystemUI.setBackgroundColorAsync("#111111");
  return (
   <View style={styles.container}>
    <StatusBar barStyle={'light-content'}/>
    <MusicPlayer />
   </View>
  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1
 }
})