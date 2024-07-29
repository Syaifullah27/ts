


interface userProps {
    params: {
        id: string
    }
}

// const User = ({ params }: { params: { id: string } }) => {

const User : React.FC<userProps> = ({ params }) => {
    return (
        <div>User {params.id}</div>
    )
}

export default User