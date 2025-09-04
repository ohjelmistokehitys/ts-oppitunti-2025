/**
 * Returns the first characters as asterisks (*)
 * and last "showNumbers" characters as-is.
 */
export function maskCreditCardNumber(creditCard: string | number, showNumbers: number = 4): string {
    if (typeof creditCard === "number") {
        return maskCreditCardNumber(creditCard.toString(), 4);
    }
    return creditCard.slice(-showNumbers).padStart(creditCard.length, "*");
}
