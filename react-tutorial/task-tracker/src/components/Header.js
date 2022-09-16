import Button from './Button'

function header ({title}) {
  return (
    <header>
        <h1 className="">{ title }</h1>
        <Button />
    </header>
  )
}

header.defaultProps = {
    title: 'Task Tracker'
}

export default header