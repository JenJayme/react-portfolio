import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CompiledQuotes () {
    let Quotes = [
        {
            quote: "There's a way to do it better - find it.",
            by: "Thomas A. Edison",
        }, {
            quote: "Learning and innovation go hand in hand.  The arrogance of success is to think that what you did yesterday will be sufficient for tomorrow.",
            by: "William Pollard"
        }, {
            quote: "Everybody in this country should learn to program a computer because it teaches you how to think.",
            by: "Steve Jobs"
        }, {
            quote: "Coding is today’s language of creativity. All our children deserve a chance to become creators instead consumers of computer science.",
            by: "Maria Klawe"
        }, {
            quote: "Design adds value faster than it adds costs.",
            by: "Joel Spolsky"
        }, {
            quote: "Simplicity is the ultimate sophistication.",
            by: "Leonardo da Vinci"
        }
    ]
    
    console.log("Quotes", Quotes);

    const QuotesWTags = [];


    for (var i = 0; i < Quotes.length; i++) {
        QuotesWTags.push(
            <p className="quotes">{Quotes[i].quote}<br></br>-{Quotes[i].by}</p>
            )
            console.log("QuotesWTags", QuotesWTags)

        return (
            <div>
                    {QuotesWTags}
            </div>
        );
    }
}

export default CompiledQuotes;