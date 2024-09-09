export class RobberLanguageConverter {
  #consonants: RegExp
  #robberVowel: string

  constructor () {
    this.#consonants = /[B-DF-HJ-NP-TV-Zb-df-hj-np-tv-z]{1}/
    this.#robberVowel = 'o'
  }

  encrypt (text: string): string {
    let result = ''

    for (const char of text) {
      if (char.match(this.#consonants)) {
        result += char + this.#robberVowel + char
        continue
      }
      result+= char
    }

    return result
  }
}
