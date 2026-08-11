import { useState } from "react";

function ContactIndex() {

    const [contactList, setContactList] = useState([
        {
            id: 1,
            name: "Daniel",
            phone: "666-666-6689",
            email: "dani@gmail.com",
            usFavorite: true,

        },
        {
            id: 3,
            name: "William",
            phone: "666-666-6489",
            email: "William@gmail.com",
            usFavorite: false,

        },
        {
            id: 3,
            name: "Ben",
            phone: "666-666-5589",
            email: "Ben@gmail.com",
            usFavorite: false,

        },

    ]);
    
    return ( 
        <div>
            Hello
        </div>
     );
}

export default ContactIndex;