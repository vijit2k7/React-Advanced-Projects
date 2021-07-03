import React,{useState} from 'react'
//import Folders from './Folders/Folders';
import Mail from './Mail/Mail';
import './Mailfunction.css'
import TextContent from './TextContent/TextContent';

function Mailfunction({user}) {
    console.log("user in mail fuinction",user);
    const [id,setID]=useState("")
    function getID(id)
    {
        console.log("get id called",id);
        setID(id)
    }
    return (
        <div className="root-wrapper">
            {/* <section className="root-folders">
                <Folders></Folders>
            </section> */}
            <section className="root-maillist">
                <Mail user={user} getID={getID}></Mail>
            </section>
            <section className="root-mailbody">
                <TextContent user={user} id={id}></TextContent> 
            </section>
        </div>
    )
}

export default Mailfunction

