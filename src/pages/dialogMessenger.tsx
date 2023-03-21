import React from 'react';
import {useParams} from 'react-router-dom';
import {userData} from '@store/index';
import MessagerNav from "@components/messagerNav";
import MessangerInput from "@components/MessangerInput";
import MessangerMessages from "@components/MessangerMessages";
import {observer} from "mobx-react-lite";

const DialogMessenger = observer(() => {
    const {id} = useParams();
    const dialog = userData.user.dialogs.find(dialog => dialog.dialog_uid == id)
        //  НУЖЕН ИНТЕРФЕЙС КОТОРЫЙ РЕАЛИЗУТ DIALOGS в USERDATA

    return (
        <>
            <MessagerNav avatar={dialog?.avatar} description={dialog?.description} name={dialog?.name}/>
            <MessangerMessages message={dialog?.messages ? dialog?.messages : []}/>
            <MessangerInput id={id}/>
        </>
    );
});

export default DialogMessenger;