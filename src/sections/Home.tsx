import AllTools from '../tools.json'
import transition from '../logic/transition'
import { Card } from '../components/Card'

function Home() {
  return (
    <ul className='toolSections'>
      {AllTools.Tools.map(tools => (
        <Card firstLevel name={tools.section_name} />
      ))}
    </ul>
  )
}

const TransitionHome = transition(Home)

export default TransitionHome
