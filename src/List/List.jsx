
const List = () => {
    const usersInfo = [
        {
            userName : "priyam",
            email : "abc@gmail.com",
            location : "india"
        },
        {
            userName : "rohit",
            email : "xyz@gmail.com",
            location : "Russia"
        },
        {
            userName : "Adii",
            email : "pyq@gmail.com",
            location : "USA"
        },

        
    ]
  return (
    <div>
        {usersInfo.map(({userName , email, location}) => (
            <ul key = {Math.random()}>
                <li>{userName}</li>
                <li>{email}</li>
                <li>{location}</li>

            </ul>
        ))}
    </div>
  )
}

export default List