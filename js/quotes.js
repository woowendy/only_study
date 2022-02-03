const quotes = [
    {
        main: "Not a shred of evidence exists in favor of the idea that life is serious.",
        sub : "Brendan Gill",
    },
    {
        main: "The most courageous act is still to think for yourself. Aloud.",
        sub : "Gabriel Coco Chanel",
    },
    {
        main: "Learn as much by writing as by reading.",
        sub : "Lord Acton",
    },
    {
        main: "Hope is necessary in every condition.",
        sub : "Samuel Johnson",
    },
    {
        main: "The most wasted of all days is one without laughter.",
        sub : "E. E. Cummings",
    },
    {
        main: "In the end, everything is a gag.",
        sub : "Charlie Chaplin",
    },
    {
        main: "Great hopes make great men.",
        sub : "Thomas Fuller",
    },
    {
        main: "While there's life, there's hope.",
        sub : "Cicero",
    },
    {
        main: "Sincerity is the way of Heaven.",
        sub : "Mencius",
    },
    {
        main: "Great deeds are usually wrought at great risks.",
        sub : "Herodotus",
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.main;
author.innerText = todaysQuote.sub;