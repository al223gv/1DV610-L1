import { RobberLanguageConverter } from "@lib/RobberLanguageConverter.js"

const robberLangConverter = new RobberLanguageConverter()

const inputText: HTMLTextAreaElement = document.querySelector('#plain-input-textarea')!

const submitButton: HTMLButtonElement = document.querySelector('#submit-plain-text-button')!

const outputParagraph: HTMLParagraphElement = document.querySelector("#output-converted-text")!

submitButton.addEventListener('click', event => {
  event.preventDefault()
  const convertedText = robberLangConverter.convertTo(inputText.value)
  outputParagraph.textContent = convertedText
})
