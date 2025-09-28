import AllTools from '../tools.json'
import transition from '../logic/transition'
import { Card } from '../components/Card'

function Home() {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col text-center justify-center mt-[95px] mx-auto pb-24'>
        <h3 className='pb-5 text-2xl md:text-4xl'>One website, every web dev tools</h3>
        <h3 className='text-xl font-light md:text-3xl '>
          Our job is that you only have to do your job
        </h3>
      </div>
      <ul className='toolSections'>
        {AllTools.Tools.map(tools => (
          <Card key={tools.section_name} firstLevel name={tools.section_name} />
        ))}
      </ul>
    </div>
  )
}

const TransitionHome = transition(Home)

export default TransitionHome
