import {
  VerticalBarSeries,
  XYPlot,
  HorizontalGridLines,
  XAxis,
  YAxis
} from 'react-vis'

export const CaseHistoryGraph = ({ history }) => {
  return (
    <XYPlot width={900} height={300} xType="time">
      <VerticalBarSeries
        data={history.map(entry => ({
          x: Number(new Date(entry.end)),
          y: entry.fraud
        }))}
      />
      <VerticalBarSeries
        data={history.map(entry => ({
          x: Number(new Date(entry.end)),
          y: entry.genuine
        }))}
      />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
    </XYPlot>
  )
}
