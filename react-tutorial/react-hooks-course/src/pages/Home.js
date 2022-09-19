
const pages = [
    { title: "Use State" },
    { title: "Use Reduce" },
    { title: "Use Effect" },
    { title: "Use Ref" },
    { title: "Use Memo" },
    { title: "Use Context" },
    { title: "Use Imperative Handler" },
    {title: "Use Layout Effect"},
    { title: "Use Callback" }
]

export const Home = () => {
    return ( 
        <div className="card-layout">
            { pages.map((el) => {
                return (
                    <div className="card-container">
                        <h1 className="card title">
                        {el.title}
                        </h1>
                    </div>
                )
            } ) }
        </div>
    )
}