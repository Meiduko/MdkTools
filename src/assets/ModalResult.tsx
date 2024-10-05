interface ModalResultProps {
  a: string
  _: number
}

export default function ModalResult({ a, _ }: ModalResultProps) {
  return (
    <div key={_} className='modalResult '>
      <h3 className='modalResultTitle'>Tool Name</h3>
      <div className='modalResultDescriptionContainer'>
        <p className='modalResultDescription'>
          {a + _}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          aspernatur nemo eaque minima voluptate eligendi corporis dignissimos,
          quia facere quae odit cumque blanditiis sunt dolorem dicta officia,
          harum ipsa eveniet!
        </p>
        <button className='modalResultBtn primaryBtn'>Ver más</button>
      </div>
    </div>
  )
}
