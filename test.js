function convertToOldMRN(NewMRN) {
    if (NewMRN) {
        NewMRN = NewMRN.toUpperCase();
        let splittedMRN = NewMRN.split('-');  
        console.log('a'.includes('-'));
        if (splittedMRN?.[0].length === 2 && splittedMRN?.[0].match(/^[a-z]+$/i)) {//This means its new MR Number
            let left = splittedMRN[0] += splittedMRN[1].substring(0, 2);
            let right = splittedMRN[1].substring(2);
            return left + '-' + right;
        } else if (NewMRN.length > 6 && /^\d+$/.test(NewMRN)) {/// Only Numbers with more than 6 charcters, hypen will be appended after left most two
            NewMRN = NewMRN.substring(0, 2) + '-' + NewMRN.substring(2);
        } 
        else if (NewMRN.length > 4 && /^[a-z]{2}/i.test(NewMRN) && !NewMRN.includes('-')) { /// if left characters are alpha next two digits will be appended before hypen
            NewMRN = NewMRN.substring(0, 4) + '-' + NewMRN.substring(4);
        }
    }
    return NewMRN;
}
const NMRN = 'nc02-065047';
console.log(NMRN)
console.log(convertToOldMRN(NMRN));

function convertToNewMRN(NewMRN) {
    if (NewMRN) {
        NewMRN = NewMRN.toUpperCase();

        let splittedMRN = NewMRN.split('-');
        if (splittedMRN?.[0].length === 4) {//This mean its Old MR Number
            let left = splittedMRN[0].substring(0, 2);
            let right = splittedMRN[0].substring(2) + splittedMRN[1];
            return left + '-' + right;
        }
    }
    return NewMRN;
}
const OMRN = 'NC02-065047';
console.log(OMRN)
console.log(convertToNewMRN(OMRN));