import { NativeModules, Platform } from 'react-native'

const LINKING_ERROR =
  `The package '@m2-modules/react-native-haptic-feedback' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n'

const ReactNativeHapticFeedback = NativeModules.ReactNativeHapticFeedback
  ? NativeModules.ReactNativeHapticFeedback
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        },
      },
    )

const {
  ImpactFeedbackStyleLight,
  ImpactFeedbackStyleMedium,
  ImpactFeedbackStyleHeavy,
  ImpactFeedbackStyleSoft,
  ImpactFeedbackStyleRigid,
  NotificationFeedbackStyleSuccess,
  NotificationFeedbackStyleWarning,
  NotificationFeedbackStyleError,
} = ReactNativeHapticFeedback.getConstants()

export enum ImpactFeedbackStyle {
  Light = ImpactFeedbackStyleLight,
  Medium = ImpactFeedbackStyleMedium,
  Heavy = ImpactFeedbackStyleHeavy,
  Soft = ImpactFeedbackStyleSoft,
  Rigid = ImpactFeedbackStyleRigid,
}

export enum NotificationFeedbackStyle {
  Success = NotificationFeedbackStyleSuccess,
  Warning = NotificationFeedbackStyleWarning,
  Error = NotificationFeedbackStyleError,
}

export function impactFeedback(impactFeedbackStyle: ImpactFeedbackStyle) {
  ReactNativeHapticFeedback.impactFeedback(impactFeedbackStyle)
}

export function selectionFeedback() {
  ReactNativeHapticFeedback.selectionFeedback()
}

export function notificationFeedback(
  notificationFeedbackStyle: NotificationFeedbackStyle,
) {
  ReactNativeHapticFeedback.notificationFeedback(notificationFeedbackStyle)
}
