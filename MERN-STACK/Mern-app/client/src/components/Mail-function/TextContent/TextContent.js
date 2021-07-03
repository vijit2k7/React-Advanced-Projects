import React from 'react'
import data from './../../../data/inbox.json';
import { useContext, useCallback, useState,useMemo } from 'react';
import classes from './TextContent.css'

function TextContent({user,id}) {
    // FETCHING DATA FROM STORE
    const { getdata, selectedID, flagFilter, getFilteredData } = data;

    // FETCHING THE INDIVIDUAL DETAILS
    const mailJSON = useMemo(() => {
        console.log("data  syyis",data,user);
        for(let i=0;i<data.length;i++)
        {
            if(data[i].mId===id)
                return data[i]
        }
    }, []);


    // CREATING THE MAIL BODY
    const mailContent = () => {
        // if (flagFilter ? getFilteredData.length :getdata.length) {
        //     if (!selectedID) {
        //         return (
        //             <section className={classes.noMailContentWrapper}>
        //                 <div>Select an item to read</div>
        //                 <div>Nothing is selected !</div>
        //             </section>
        //         )
        //     }
        console.log("mailjson is",mailJSON);
        if (mailJSON) {
                return (
                    <div className={classes.mainBody}>
                        {/* <header className={classes.profileHeader}>
                            <div className={classes.outerFlex}>
                                <FontAwesomeIcon size="3x" icon={faUserCircle} className={classes.profileIconStyles}></FontAwesomeIcon>
                                <div className={classes.innerFlex}>
                                    <span>{mailJSON?.mId}</span>
                                    <span>{mailJSON?.subject}</span>
                                </div>
                            </div>
                            {(selectedFolder !== FOLDER_TYPES.DELETED) && <FontAwesomeIcon size="sm" icon={faTrashAlt} className={classes.deleteIconStyles} onClick={deleteClickHandler.bind(null, mailJSON?.mId)}></FontAwesomeIcon>}
                        </header>
                        <hr /> */}

                        <main>
                            <div  dangerouslySetInnerHTML={{ __html: mailJSON.content }} className={classes.dangerousDiv}></div>
                        </main>
                    </div>
                )
            }
        
        return null;
    }

    return (
        <div className={classes.wrapper}>
            {mailContent}
        </div>
    )
}

export default TextContent
