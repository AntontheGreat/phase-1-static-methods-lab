class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(sentence) {
    return sentence.split("").map(s => {

      return (/([a-zA-Z]|\s|-|')/.test(s)) ? s : ""


    }).join("")
  }

  static titleize(sentence) {
    const arr = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let modSentence = sentence.split(" ").map(s => {
      if(!arr.includes(s)) {
        return Formatter.capitalize(s)
      } else {
        return s
      }

    }).join(" ")
    
    return Formatter.capitalize(modSentence)
  }
};
