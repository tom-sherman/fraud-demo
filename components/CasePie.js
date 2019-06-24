import { RadialChart, DiscreteColorLegend } from 'react-vis'

export const CasePie = ({ fraud, genuine, validate }) => (
  <RadialChart
    width={300}
    height={300}
    data={[
      {
        angle: fraud,
        label: 'Fraud'
      },
      {
        angle: genuine,
        label: 'Genuine'
      },
      {
        angle: validate,
        label: 'Validate'
      }
    ]}
  >
    <DiscreteColorLegend
      items={['Fraud', 'Genuine', 'Validate']}
      orientation="horizontal"
    />
  </RadialChart>
)
