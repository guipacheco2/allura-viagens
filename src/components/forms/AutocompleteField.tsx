import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { removeSpecialCharacters } from '../../utils'
import { TextField, TextFieldProps } from './TextField'

function useAutocompleteField(
  data: { text: string; value: string }[],
): [{ text: string; value: string }[], (text: string) => void] {
  const [text, setText] = useState('')

  const setTextRaw = useCallback((text) => {
    setText(removeSpecialCharacters(text).toLowerCase())
  }, [])

  const parsedText = removeSpecialCharacters(text).toLowerCase()

  const filteredData = useMemo(() => {
    return data
      .filter(({ text }) => {
        if (removeSpecialCharacters(text).toLowerCase().includes(parsedText)) {
          return true
        }

        return false
      })
      .slice(0, 10)
  }, [parsedText])

  return [filteredData, setTextRaw]
}

interface AutocompleteFieldProps {
  data: { text: string; value: string }[]
  TextFieldProps: TextFieldProps
}

export function AutocompleteField({
  data = [],
  TextFieldProps,
}: AutocompleteFieldProps): JSX.Element {
  const [filteredData, setText] = useAutocompleteField(data)

  const id = `TextFieldDatalist$${TextFieldProps.name}`

  useEffect(() => {
    setText(TextFieldProps.value)
  }, [TextFieldProps.value])

  return (
    <Fragment>
      <TextField {...TextFieldProps} list={id} />
      <datalist id={id}>
        {filteredData.map(({ text, value }) => (
          <option key={value} value={text}></option>
        ))}
      </datalist>
    </Fragment>
  )
}
