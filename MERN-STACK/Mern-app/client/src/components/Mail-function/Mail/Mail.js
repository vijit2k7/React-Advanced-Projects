import React from 'react'
import { useContext, useCallback, useState } from 'react';
import classes from './Mail.css';
import data from './../../../data/inbox.json';
function Mail({user,getID}) {

    const [id,setID]=useState("")
    // MAIL CLICK HANDLER TO DISPLAY DATA ON RHS
    const mailOnClickHandler = (mID) => {
        console.log("mid is",mID)
        getID(mID);
    }

    const generateMailList = useCallback(() => {
        return (
            (data).map((el, index) => {
                return (
                    <li onClick={mailOnClickHandler(el.mId)}>
                        <div className={[classes.subjectContent, el.unread && classes.notVisited].join(" ")}>{el.subject}</div>
                        <div className={classes.subjectContent}>{el.content.replace(/<.*?>/ig, "")}</div>
                    </li>
                )
            }))
    }, [])

    // FALL BACK JSX WHEN NOTHING EXISTS
    const fallBackJSX = () => {
        return (
            <div className={classes.fallBackStyles}>
                <span>Nothing in the MailBox.</span>
                <span>Looks empty over here!</span>
            </div>
        )
    }
    return (
        <div className={classes.wrapper}>
            <main>
                <ul>
                    {generateMailList().length ? generateMailList() : fallBackJSX()}
                </ul>
            </main>
        </div>
    )
}

export default Mail
