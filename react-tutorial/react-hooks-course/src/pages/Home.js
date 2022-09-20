import { Link } from 'react-router-dom'

const pages = [
    { title: "Use State", link: "/use-state", description: "useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later." },
    { title: "Use Reduce", link: "/use-reduce", description: "The useReducer Hook is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful." },
    { title: "Use Effect", link: "/use-effect", description: "By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates" },
    { title: "Use Ref", link: "/use-ref", description: "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly." },
    { title: "Use Memo", link: "/use-memo", description: "" },
    { title: "Use Context", link: "/use-context", description: "" },
    { title: "Use Imperative Handler", link: "/use-imperative-handler", description: "" },
    { title: "Use Layout Effect", link: "/use-layout-effect", description: "" },
    { title: "Use Callback", link: "/use-callback", description: "" }
]

export const Home = () => {
    const linkStyle = {
        textDecoration: "none"
    }
    return (
        <div className="card-layout">
            {pages.map((el) => {
                return (
                    <div className="card-container">
                        <Link to={el.link} style={linkStyle}>
                                <h1 className="card title">
                                    {el.title}
                                </h1>
                                <p className="card description">
                                    {el.description}
                                </p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}