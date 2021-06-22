import React from 'react'
import { Text } from 'react-native'
import { purple, gray, white } from '../utils/colors'

export default function DateHeader ({ date }) {
  return (
    <Text style={{color: purple, fontSize: 25 , textAlign:'center'}}>
      {date}
    </Text>
  )
}