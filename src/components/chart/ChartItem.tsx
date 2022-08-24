import React, { useMemo } from 'react'
import { IChartItem } from '../../modals/IChartItem'
import { Item, Name, TimeLineContainer, TimeLine } from './ChartItem.styled'

interface ChartItemTypes {
  item: IChartItem, 
  allTime: number,
  beforeTime: number
}

const ChartItem: React.FC<ChartItemTypes> = ({item, allTime, beforeTime}) => {
  const positionLeft: string = useMemo(() => {
    if (beforeTime === 0) return "0%"
    return `${beforeTime / allTime * 100}%`
  }, [])

  const itemWidth = useMemo(() => {
    return `${item.time / allTime * 100}%`
  },[])

  return (
    <Item>
      <Name>{item.name}</Name>
      <TimeLineContainer>
        <TimeLine left = {positionLeft} width = {itemWidth}>{item.time}</TimeLine>
      </TimeLineContainer>
    </Item>
  )
}

export default ChartItem