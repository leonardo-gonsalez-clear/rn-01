import { View, Text, Modal, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { create } from "zustand"
import Button from '../../components/Button'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Background, Container, Content } from './calendarModal.styled'
import { Calendar, DateData } from 'react-native-calendars'
import { format, parseISO } from 'date-fns'
import { useUserStore } from '../../stores/useUserStore'
import ptBR from 'date-fns/locale/pt-BR'

interface IUseCalendarModal {
  visible: boolean
  toggle: () => void
}

export const useCalendarModal = create<IUseCalendarModal>((set) => ({
  visible: false,
  toggle: () => set((state) => ({ visible: !state.visible }))
}))

const CalendarModal = () => {
  const date = useUserStore(state => state.date)
  const visible = useCalendarModal(state => state.visible)
  const toggle = useCalendarModal(state => state.toggle)
  const [selected, setSelected] = React.useState<string>("")
  const setDate = useUserStore(state => state.setDate)

  const handleDayPress = (day: DateData) => {
    setSelected(day.dateString)
  }

  const handleFilter = () => {
    const ISODate = new Date(selected).toLocaleString("pt-BR", { timeZone: "UTC" }).slice(0, 10)
    setDate(ISODate)

    toggle()
  }

  return (
    <Container>
      <Background >
        <Pressable onPress={toggle} style={{ flex: 1 }}>
        </Pressable>
      </Background >

      <Content>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{ [selected]: { selected: true, selectedColor: "orange" } }}
          theme={{
            todayDotColor: "#3b3dbf",
          }}
        />
        <Button onPress={handleFilter}>Filtrar</Button>
      </Content>
    </Container>
  )
}

export default CalendarModal
