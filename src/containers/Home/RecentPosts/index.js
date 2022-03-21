import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={'https://images.pexels.com/photos/11284549/pexels-photo-11284549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Attualità</span>
                <h2>Ucraina: la cyber guerra</h2>
                <span>pubblicato il 03/03/2022</span>
                <p>Almeno due attacchi informarici contro le infrastrutture digitali dell'Ucraina hanno preceduto di poche ore l'invasione della Russia. A svelarlo sono il team di analisti di cybersecurity di Microsoft, che ha subito allertato il governo di Kyiv del pacchetto di malware identificato, FoxBlade, e i tecnici della società di sicurezza informatica Eset. Il colosso di Redmond afferma di aver fornito immediata assistenza alle autorità ucraine e di aver aggiornato il proprio servizio anti-malware per identificare la minaccia. Eset invece ha messo nel mirino un nuovo data wiper, detto Isaac Wiper, ossia un malware che cancella tutti i dati di una macchina e la rende inservibile, a sua volta scatenato contro le infrastrutture ucraine ore prima dell'invasione russa e diverso da Hermetic Wiper, un virus con il medesimo funzionamento che l'azienda aveva segnalato già giorni fa...</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts