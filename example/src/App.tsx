import {
  impactFeedback,
  ImpactFeedbackStyle,
} from '@m2-modules/react-native-haptic-feedback'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <button
        onClick={() => {
          impactFeedback(ImpactFeedbackStyle.Light)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})
