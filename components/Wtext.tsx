import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Wtext(props) {
  return (
    <View>
      <Text style={styles.txtC}>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
   txtC: {
     color: '#ffffff'
   }
})