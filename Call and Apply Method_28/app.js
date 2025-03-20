/*
* JavaScript Call and Apply Method 
*/

const greenLine = {
    bus: 'Green Line Paribahan',
    bCode: 'GL',
    ticket: [],
    book(setNumber, name) {
        console.log(`${name} booked a sit on ${this.bus}
        ticket ${this.bCode}-${setNumber}`
        );
        this.ticket.push({
            ticketInfo: `${this.bCode}
           -${setNumber}`, name
        });
    },
};
greenLine.book('c1', 'Diya');
greenLine.book('c2', 'Riya');
console.log(greenLine);

const shohagh = {
    bus: 'Shohagh Paribahan',
    bCode: 'SH',
    ticket: [],

}

const book = greenLine.book;

//book('B1', 'Rizon hossain');
book.call(shohagh, 'B1', 'Rizon hossain');
book.call(shohagh, 'B2', 'Rizona hossain');
book.call(greenLine, 'B2', 'Rizona hossain');
console.log(shohagh);


const hanif = {
    bus: 'Hanif Paribahan',
    bCode: 'HN',
    ticket: [],
}

book.call(hanif, 'B2', 'Diya');

// Apply Method

const ticketData = ['B2', 'Diya'];
book.apply(greenLine, ticketData);
book.apply(hanif, ['B4', 'Hiya']);