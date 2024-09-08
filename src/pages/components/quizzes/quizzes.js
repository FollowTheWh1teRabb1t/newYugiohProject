import React, { useState, useEffect } from 'react';
import styles from './quizzes.module.css';
import axios from 'axios';

export default function Quizzes() {

    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState({});
    
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/api/questions');
                setQuestions(response.data);
            } catch (error) {
                console.error("Erro ao buscar perguntas", error);
            }
        };
    
        fetchQuestions();
    }, []);

    const handleAnswerClick = (questionId, selectedOption) => {
        const question = questions.find(q => q.id === questionId); 
        if(question.answer === selectedOption) {
            setScore(score + 2);
            setFeedback({ ...feedback, [questionId]: 'Correto!' });
        } else {
            setFeedback({ ...feedback, [questionId]: 'Errado! Tente novamente.'})
        }
    };
    
    
    return (
        <section className={styles.mainTag}>
            <div className={styles.boxTitle}>
                <h1>Welcome to the [QA] Quizzes Area!</h1>
            </div>
            {questions.map((question) => (
                <div key={question.id} className={styles.question}>
                    <p>{question.question}</p>
                    <ul>
                        {question.options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswerClick(question.id, option)}>{option}</li>
                        ))}
                    </ul>
                    {feedback[question.id] && <p className={styles.feedBack}>{feedback[question.id]}</p>}
                </div>
            ))}
             <div className={styles.boxScore}>
                <p>Score: {score}</p>
            </div>
        </section>
    );
}
