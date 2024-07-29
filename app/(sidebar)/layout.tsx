
interface LayoutProps {
    children: React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({ children }) => {
    
    return (
        <div>
            <h1>Ini Layout</h1>
            {children}
        </div>
    )
}

export default Layout