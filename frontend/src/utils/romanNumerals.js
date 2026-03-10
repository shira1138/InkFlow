// Roman Numeral conversion utilities

export const convertToRoman = (num) => {
  if (!num || num <= 0) return '';
  
  const romanMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];
  
  let roman = '';
  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      roman += romanMap[i].numeral;
      num -= romanMap[i].value;
    }
  }
  return roman;
};

export const convertFromRoman = (str) => {
  if (!str) return 0;
  
  const romanNumeral = str.toUpperCase();
  const romanMap = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };
  
  let num = 0;
  let i = 0;
  
  while (i < romanNumeral.length) {
    const twoChar = romanNumeral.substr(i, 2);
    if (romanMap[twoChar]) {
      num += romanMap[twoChar];
      i += 2;
    } else {
      num += romanMap[romanNumeral[i]];
      i += 1;
    }
  }
  return num;
};

// Format list items with Roman numerals
export const romanNumeralListFormatter = (listType) => {
  return listType === 'roman' ? 'i' : 'I';
};

export default {
  convertToRoman,
  convertFromRoman,
  romanNumeralListFormatter
};
