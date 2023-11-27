import {  Link  } from 'react-router-dom'
import styles from '../modules/Message.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import logo from './images/logo.png'


export function Message() {

    //useState
    //============================================
    const [userName, setuserName] = useState('');
    const [userThoughts, setuserThoughts] = useState('');
    const [message, setMessage] = useState([]);
    //============================================


//Requisition http
//====================================
    const saveMessage = async () => {

        try {
            await axios.post('', {userName, userThoughts}) //servidor php
            resetInputs();
            loadMessage();
        }
        catch (error) {
            console.error('Fail to save message:', error);
        }
    }

    //Limpa os campos após o uso
    const resetInputs = () => {
        setuserName('');
        setuserThoughts('');
      };

      useEffect(() => {
        loadMessage();
      }, []);



    const loadMessage = async () => {

        try {
          const getResponse = await axios.get(''); //servidor php
          setMessage(getResponse.data);

        } catch (error) {
          console.error('fail to load message:', error);
        }
      };

      const deleteMessage = async (ID) => {  

        try {
          await axios.delete(ID); //servidor php (necessita ID)

        } catch (error) {
          console.error('Error to :', error);
        }
      };
    //=================================

    return(
    <div>
        <header>
        <div className={styles.container}>
            <img src={logo} alt='logo' />
                <nav>
                    <Link to="/"><button>Voltar</button></Link>
                </nav>
        </div>
        </header>

            <form method='POST'>
                <h1>Compartilhe os seus pensamentos</h1>
                <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} name='userName' placeholder='Nome...' required/>
                <textarea name="" id="messageText" value={userThoughts} onChange={(e) => setuserThoughts(e.target.value)}  cols="30" rows="10" placeholder='O que você está pensando?...'></textarea>
                <button onClick={saveMessage}>Salvar</button>
            </form>

            <div>
            {Array.isArray(message) && message.map((messageMap) => (

            <div key={messageMap.ID}>
              <p>{messageMap.userName}</p>
              <p>{messageMap.userThoughts}</p>
              <button onClick={() => deleteMessage(messageMap.ID)}>Deletar</button>
            </div>
          ))}
                
            </div>
    </div>

    )
}