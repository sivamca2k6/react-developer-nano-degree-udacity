import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'MobileFlashCards:notifications';

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

export function getDailyReminderValue() {
    return [{
      today: "you are not yet played quiz today!"
    }]
  }

  export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }

  export function createNotification() {
    return {
      title: 'Reminder Notification!',
      body: 'you are not yet played quiz today!',
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
      }
    }
  }

  export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if(data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if(status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let tommorow = new Date();
                tommorow.setDate(tommorow.getDate() + 1);
                tommorow.setHours(8);
                tommorow.setMinutes(0);
  
                Notifications.scheduleNotificationAsync(
                  createNotification(),
                  {
                    time: tommorow,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
              }
            })
        }
      })
  }