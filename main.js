const input = require("readline-sync");

let inputPassword;
let validatedLength;
let validatedUpperCase;
let validatedNumber;
let validPassword = false;

do
{
    inputPassword = input.question("Please enter a password: ");

    validatedLength = false;
    validatedUpperCase = false;
    validatedNumber = false;

    /* validate if the input password is at least 8 characters */
    if (inputPassword.length >= 8)
    {
        validatedLength = true;
 
        for (let inputCharacter of inputPassword)
        {
            /* check if the input character is a number */
            if (!Number.isNaN(Number(inputCharacter)))
            {
                validatedNumber = true;
            }
            else
            {                   
                /* check if the input character is an uppercase letter */    
                if ((inputCharacter === inputCharacter.toUpperCase()) 
                    && (inputCharacter.toUpperCase !== inputCharacter.toLowerCase()))
                {
                    validatedUpperCase = true;        
                }
            }
        
            if (validatedNumber
                && validatedUpperCase)
            { 
                break;
            }            
        }
    }

    if (validatedLength === true
        && validatedUpperCase === true
        && validatedNumber === true)
    {
        validPassword = true;
    }
    
    if (!validPassword)
    {
        outputMessage = 
`Your password does not meet the requirements:
    At least 8 characters
    At least 1 uppercase letter  
    At least 1 number`;
        
        console.log(outputMessage);
    }
} while (!validPassword);

console.log("Your password was successfully validated");


