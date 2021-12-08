function convertToOldMRN(NewMRN) {
    if (NewMRN) {
        NewMRN = NewMRN.toUpperCase();
        let splittedMRN = NewMRN.split('-');
        if (splittedMRN?.[0].length === 2 && splittedMRN?.[0].match(/^[a-z]+$/i)) {//This means its new MR Number
            let left = splittedMRN[0] += splittedMRN[1].substring(0, 2);
            let right = splittedMRN[1].substring(2);
            return left + '-' + right;
        }
    }
    return NewMRN;
}
const NMRN = 'nc-02065047';
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