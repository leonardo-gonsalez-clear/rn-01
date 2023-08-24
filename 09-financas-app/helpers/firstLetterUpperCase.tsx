const firstLetterUpperCase = (str: string) => {
  const firstLetter = str.charAt(0).toUpperCase()

  return firstLetter + str.slice(1)

}

export default firstLetterUpperCase
