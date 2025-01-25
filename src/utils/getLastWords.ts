export const getLastWords = (url: string): string => {
  if (url) {
    const word = url.split('/').pop();
    if(word) {
      return word && word.replace(/([a-z])([A-Z])/g, '$1 $2'); // Divide el string por '/' y toma la última parte
    } else return ('');
  } else return ('');
};