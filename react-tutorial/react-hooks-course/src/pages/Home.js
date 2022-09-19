

export const Home = () => {
    return ( 
        <div className="card-layout">
            { [1,2,3].map(() => <div className="card-container">This is title</div>) }
        </div>
    )
}