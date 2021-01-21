import React from 'react';

const faqs = [
    {
        question:"Whose blog is this?",
        answer: "Kristin Delisa Hargrove"
    },
    {
        question:"Who made this blog?",
        answer: "Kristin"
    },
    {
        question:"Who is your favorite artist?",
        answer: "Celine Dion"
    },
    {
        question:"Do you like Nike shoes?",
        answer: "Sure"
    },
];

const Faq = (props) => (
    <>
     {
        faqs.map((faq) => (
            <>
                <h4 style = {{ padding : 10}}>{faq.question}</h4>
                <p style = {{ padding : 5}}>{faq.answer}</p>
            </>        
            ))
        }      
    </>
)

export default Faq;