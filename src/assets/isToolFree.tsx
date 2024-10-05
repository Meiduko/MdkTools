interface isToolFreeProps {
  isFree: string | boolean | undefined
}

export function IsToolFree({ isFree }: isToolFreeProps) {
  return (
    <div className='free'>
      {isFree === 'Freemium' ? (
        <p>Freemium</p>
      ) : isFree ? (
        <p className='isFree inter-400'>&nbsp;$&nbsp;</p>
      ) : (
        <p className='isNotFree inter-400'>$</p>
      )}
    </div>
  )
}
