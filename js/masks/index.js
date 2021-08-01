function mask(stringValue, pattern) { 
  let counter = 0;

  return pattern.replace(/#/g, () => stringValue[counter++] || '');
}

const phone = mask('11996112307', '(##) #####-####');
const cpf = mask('25772413058', '###.###.###-23');
const zipcode = mask('08730780', '#####-###');

console.log(phone);
// Result: (11) 99611-2307

console.log(cpf);
// Result: 257.724.130-23

console.log(zipcode);
// Result: 08730-780

// A better way to make reusable masks
const PHONE_MASK_PATTERN = '(##) #####-####';

const phoneMask = (valueString) => mask(valueString, PHONE_MASK_PATTERN);

const phone = phoneMask('11996112307');

console.log(phone);
// Result: (11) 99611-2307