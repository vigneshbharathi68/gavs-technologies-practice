import Button from './Button'

function header ({title}) {
  return (
    <div>
        <h1 className="">{ title }</h1>
        <Button />
    </div>
  )
}

header.defaultProps = {
    title: 'Task Tracker'
}

export default header