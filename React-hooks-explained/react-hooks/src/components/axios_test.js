import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'

 function Axios_test() {
    use
    useEffect(() => {
        A();
    }, [])

    async function A()
    {
        console.log("A")
        const response= await axios.get('https://covid19.mathdro.id/api');

        console.log("response is",response);

    }

    return (
        <div>
            deathleaf
        </div>
    )
}

export default Axios_test
