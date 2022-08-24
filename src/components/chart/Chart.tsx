import React, {useState, useMemo, useEffect, useCallback} from 'react'
import { CHART_ITEMS } from '../../store/constants'
import ChartItem from './ChartItem'
import { List } from './Chart.styled'
import { IChartItem } from '../../modals/IChartItem'

const Chart = () => {
  const [chartItems, setChartItems] = useState<IChartItem[]>(CHART_ITEMS)
  const [itemsBeforeTime, setItemsBeforeTime] = useState<number[]>([])

  const getItemsBeforeTime = useCallback(() => {
    let timeBefore = 0;
    let currentTime = 0;

    return chartItems.map((item, index) => {
      timeBefore += currentTime
      currentTime = item.time
      return Number(timeBefore.toFixed(2))
    })
  }, [chartItems])

  useEffect(() => {
    setItemsBeforeTime(getItemsBeforeTime)
  }, [getItemsBeforeTime])

  const allTime: number = useMemo(() => {
    return Number(chartItems.reduce((allTime, currentTime) => {
      return allTime + currentTime.time} , 0).toFixed(2))
  }, [chartItems])

  return (
    <List>
      {itemsBeforeTime.length !== 0 && <>
        {chartItems.map((item, index) => {
          return <ChartItem 
            key = {item.name} 
            item = {item} 
            allTime = {allTime} 
            beforeTime = {itemsBeforeTime[index]}/>
        })}
      </>
      }
    </List>
  )
}

export default Chart