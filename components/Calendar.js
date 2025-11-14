import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'

import Dropdown from './Dropdown'
import DateView from './DateView'

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"]

const Calendar = () => {
  const today = new Date()
  const todayDate = today.getDate()
  let todayIndex = today.getDay()  // 0 = Sun, 1 = Mon...

  // if today is Sunday, treat it as SAT (last day)
  if (todayIndex === 0) {
    todayIndex = 6
  } else {
    todayIndex = todayIndex - 1
  }

  // Build calendar dates for mon → sat
  const calendar = days.map((day, i) => {
    return {
      day,
      date: todayDate - (todayIndex - i),  // shift dates based on weekday
      isToday: i === todayIndex,
    }
  })

  return (
    <View>
      <Dropdown 
        sectionTitle={'Updating Schedule'}
        seeAll={'Month'}
        newStyles={{ alignSelf: "center" }}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.calendarScrollView}>

        {calendar.map((item, index) => (
          <DateView
            key={index}
            day={item.day}
            date={item.date}
            newStyles={item.isToday ? { backgroundColor: "#fff" } : {}}
            newText={item.isToday ? { color: "#00BBD3" } : {}}
            newDayTxt={item.isToday ? { color: "#00BBD3" } : {}}
          />
        ))}

      </ScrollView>
    </View>
  )
}
export default Calendar


const styles = StyleSheet.create({
  calendarScrollView:{
    width: 350,
    alignSelf: "center"
  },
})