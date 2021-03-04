import { useCallback, useMemo, useState } from 'react'
import { removeSpecialCharacters } from '../../../utils'
import { countries } from './countries'

export function useCountries(): [
  { text: string; value: string }[],
  (text: string) => void,
] {
  const [text, setText] = useState('')

  const setParsedText = useCallback((text) => {
    setText(removeSpecialCharacters(text).toLowerCase())
  }, [])

  const parsedText = removeSpecialCharacters(text).toLowerCase()

  const filteredCountries = useMemo(() => {
    return countries.filter(({ text }) => {
      if (removeSpecialCharacters(text).toLowerCase().includes(parsedText)) {
        return true
      }

      return false
    })
  }, [])

  return [filteredCountries, setParsedText]
}
