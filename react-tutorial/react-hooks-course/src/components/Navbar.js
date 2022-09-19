import { Link } from 'react-router-dom'
import styles from './Navbar.css'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link to="/use-state">Use State</Link>
            <Link to="/use-reduce">Use Reduce</Link>
            <Link to="/use-effect">Use Effect</Link>
            <Link to="/use-ref">Use Ref</Link>
            <Link to="/use-layout">Use Layout</Link>
            <Link to="/use-imperative">Use Imperative</Link>
            <Link to="/use-context">Use Context</Link>
            <Link to="/use-memo">Use Memo</Link>
            <Link to="/use-callback">Use Callback</Link>
        </div>
    )
}