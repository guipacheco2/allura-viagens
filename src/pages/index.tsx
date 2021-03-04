import React, { useRef, useState } from 'react'
import {
  AutocompleteField,
  Box,
  Button,
  ErrorAnimation,
  Flex,
  GridCol,
  GridContainer,
  GridRow,
  MaskedField,
  Page,
  PaymentMethodSelector,
  Surface,
  TextField,
  Typography,
} from '../components'
import { SuccessAnimation } from '../components/animations/SuccessAnimation'
import { countries } from '../components/patterns/Countries/countries'

enum FormStates {
  IDLE,
  LOADING,
  DONE,
  ERROR,
}

function useForm() {
  const canSubmitRef = useRef(false)

  const [submissionStatus, setSubmissionStatus] = useState<FormStates>(
    FormStates.IDLE,
  )

  const initialValues = {
    birthDay: '',
    depart: '',
    document: '',
    email: '',
    firstName: '',
    from: '',
    lastName: '',
    phone: '',
    residenceCountry: '',
    return: '',
    to: '',
    paymentMethod: '',
  }

  const [values, setValues] = useState({ ...initialValues })

  function setValue(name: string, value: string) {
    setValues((currentValues) => {
      const nextValues = {
        ...currentValues,
        [name]: value,
      }

      function enforceValues() {
        if (nextValues.return) {
          if (!nextValues.depart) {
            nextValues.return = ''
          }

          if (new Date(nextValues.return) <= new Date(nextValues.depart)) {
            nextValues.return = ''
          }
        }

        return nextValues
      }

      return enforceValues()
    })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.getAttribute('name'), event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmissionStatus(FormStates.LOADING)

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (canSubmitRef.current) {
          resolve({})
        } else {
          reject()
        }

        canSubmitRef.current = !canSubmitRef.current
      }, 500)
    })
      .then(() => {
        setSubmissionStatus(FormStates.DONE)
      })
      .catch(() => {
        setSubmissionStatus(FormStates.ERROR)
      })
  }

  function resetFormState(resetValues = false) {
    if (resetValues) {
      setValues({ ...initialValues })
    }

    setSubmissionStatus(FormStates.IDLE)
  }

  const isValid = !Object.values(values).some((value) => !value)

  return {
    handleSubmit,
    values,
    setValue,
    handleChange,
    submissionStatus,
    resetFormState,
    isValid,
  }
}

function getMaxDate(iso8601: string) {
  const date = new Date(iso8601)

  date.setFullYear(date.getFullYear() + 1)

  return date.toISOString().split('T')[0]
}

export default function HomePage(): JSX.Element {
  const {
    values,
    submissionStatus,
    isValid,
    resetFormState,
    setValue,
    handleChange,
    handleSubmit,
  } = useForm()

  const todayAsIso8601 = new Date().toISOString().split('T')[0]

  if (submissionStatus === FormStates.DONE) {
    return (
      <Page>
        <GridContainer flex={1}>
          <Surface>
            <Typography
              as="h1"
              variant={{ xs: 'headline3', md: 'headline2' }}
              onColor="surface"
              color="primary"
              textAlign="center"
            >
              Alura Viagens
            </Typography>

            <Box>
              <Typography
                variant="headline5"
                onColor="surface"
                textAlign="center"
                as="p"
              >
                Compra realizada com sucesso. Obrigado pela preferência.
              </Typography>
            </Box>

            <Box>
              <Flex justifyContent="center">
                <SuccessAnimation />
              </Flex>
            </Box>

            <Box>
              <Flex justifyContent="center">
                <Button
                  color="primary"
                  type="button"
                  onClick={() => resetFormState(true)}
                >
                  Comprar outra
                </Button>
              </Flex>
            </Box>
          </Surface>
        </GridContainer>
      </Page>
    )
  }

  if (submissionStatus === FormStates.ERROR) {
    return (
      <Page>
        <GridContainer flex={1}>
          <Surface>
            <Typography
              as="h1"
              variant={{ xs: 'headline3', md: 'headline2' }}
              onColor="surface"
              color="primary"
              textAlign="center"
            >
              Alura Viagens
            </Typography>

            <Box>
              <Typography
                variant="headline5"
                onColor="surface"
                textAlign="center"
                as="p"
              >
                Falha ao comprar viagem, por favor tente novamente.
              </Typography>
            </Box>

            <Box>
              <Flex justifyContent="center">
                <ErrorAnimation />
              </Flex>
            </Box>

            <Box>
              <Flex justifyContent="center">
                <Button
                  color="primary"
                  type="button"
                  onClick={() => resetFormState(false)}
                >
                  Voltar
                </Button>
              </Flex>
            </Box>
          </Surface>
        </GridContainer>
      </Page>
    )
  }

  return (
    <Page>
      <GridContainer flex={1}>
        <Surface>
          <form onSubmit={handleSubmit}>
            <Typography
              as="h1"
              variant={{ xs: 'headline3', md: 'headline2' }}
              onColor="surface"
              color="primary"
              textAlign="center"
            >
              Alura Viagens
            </Typography>

            <Box>
              <Typography
                variant="headline6"
                onColor="surface"
                textAlign="center"
              >
                Quando será a viagem?
              </Typography>
            </Box>

            <GridRow>
              <GridCol size={{ xs: 12, md: 6 }}>
                <TextField
                  onChange={handleChange}
                  type="date"
                  name="depart"
                  label="Data de saída"
                  min={todayAsIso8601}
                  max={getMaxDate(todayAsIso8601)}
                  value={values.depart}
                />
              </GridCol>
              <GridCol size={{ xs: 12, md: 6 }}>
                <TextField
                  onChange={handleChange}
                  type="date"
                  name="return"
                  label="Data de retorno"
                  min={values.depart}
                  max={values.depart ? getMaxDate(values.depart) : ''}
                  disabled={!values.depart}
                  value={values.return}
                />
              </GridCol>
            </GridRow>

            <GridRow>
              <GridCol size={{ xs: 12, md: 6 }}>
                <AutocompleteField
                  data={countries}
                  TextFieldProps={{
                    onChange: handleChange,
                    type: 'text',
                    name: 'from',
                    value: values.from,
                    label: 'Local de origem',
                  }}
                />
              </GridCol>
              <GridCol size={{ xs: 12, md: 6 }}>
                <AutocompleteField
                  data={countries}
                  TextFieldProps={{
                    onChange: handleChange,
                    type: 'text',
                    name: 'to',
                    value: values.to,
                    label: 'Local de chegada',
                  }}
                />
              </GridCol>
            </GridRow>

            <Box>
              <Typography
                variant="headline6"
                onColor="surface"
                textAlign="center"
              >
                Como será o pagamento?
              </Typography>
            </Box>

            <PaymentMethodSelector
              selected={values.paymentMethod}
              onClick={(value) => setValue('paymentMethod', value)}
            />

            <Box>
              <Typography
                variant="headline6"
                onColor="surface"
                textAlign="center"
              >
                Quem vai viajar?
              </Typography>
            </Box>

            <TextField
              onChange={handleChange}
              type="text"
              name="firstName"
              value={values.firstName}
              label="Nome"
            />

            <TextField
              onChange={handleChange}
              type="text"
              name="lastName"
              value={values.lastName}
              label="Sobrenome"
            />

            <GridRow>
              <GridCol size={{ xs: 12, md: 6 }}>
                <AutocompleteField
                  data={countries}
                  TextFieldProps={{
                    onChange: handleChange,
                    type: 'text',
                    name: 'residenceCountry',
                    value: values.residenceCountry,
                    label: 'País de residência',
                  }}
                />
              </GridCol>
              <GridCol size={{ xs: 12, md: 6 }}>
                <TextField
                  type="date"
                  onChange={handleChange}
                  name="birthDay"
                  max={todayAsIso8601}
                  value={values.birthDay}
                  label="Data de nascimento"
                />
              </GridCol>
            </GridRow>

            <MaskedField
              name="document"
              onAccept={(value: string) => setValue('document', value)}
              value={values.document}
              label="CPF"
              type="text"
              mask="000.000.000-00"
              unmask={false}
            />

            <TextField
              onChange={handleChange}
              type="email"
              name="email"
              value={values.email}
              label="Email"
            />

            <MaskedField
              name="phone"
              onAccept={(value: string) => setValue('phone', value)}
              value={values.phone}
              label="Telefone"
              type="text"
              mask="(00) 00000-0000"
              unmask={false}
            />

            <Button
              color="primary"
              type="submit"
              disabled={!isValid || submissionStatus === FormStates.LOADING}
              size={{ xs: 'fullWidth', md: 'normal' }}
            >
              Comprar
            </Button>
          </form>
        </Surface>
      </GridContainer>
    </Page>
  )
}
