var quotes = [

    "No one has ever seen God; but if we love one another, God lives in us, and his love is made complete in us.",
    "God is our refuge and strength, a very present help in trouble.Psalms 46:1",
    "So that we may boldly say, The Lord is my helper, and I will not fear what man shall do unto me. Hebrews 13:6",
    "Because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For with the heart, one believes and is justified, and with the mouth one confesses and is saved.Romans 10: 9-10",
 ]

 function getQuote() {
    
     var randomNumber= Math.floor(Math.random() * quotes.length)
     document.getElementById('newQuoteSection').innerHTML= quotes[randomNumber]