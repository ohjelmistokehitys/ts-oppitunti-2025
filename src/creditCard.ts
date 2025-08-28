/**
 * Returns the first characters as asterisks (*)
 * and last "showNumbers" characters as-is.
 */
function maskCreditCardNumber(creditCard: string | number, showNumbers: number = 4): string {
    if (typeof creditCard === "number") {
        return maskCreditCardNumber(creditCard.toString(), showNumbers);
    }
    return creditCard.slice(-showNumbers).padStart(creditCard.length, "*");
}

const visaCard = "4111111111111111";
const masterCard = "5555555555554444";
const amexCard = "3782810005";
const discoverCard = "60111111111117";
const dinersCard = 3056925904;

console.log(maskCreditCardNumber(visaCard));
console.log(maskCreditCardNumber(masterCard));
console.log(maskCreditCardNumber(amexCard));
console.log(maskCreditCardNumber(discoverCard));
console.log(maskCreditCardNumber(dinersCard, 2));

const days = ["ma", "ti", "ke", "to", "pe"] as const;

// days.push("hello");
// days.push("world");
// Property 'push' does not exist on type 'readonly ["ma", "ti", "ke", "to", "pe"]'
