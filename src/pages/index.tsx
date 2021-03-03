import React from 'react'
import {
  Box,
  Button,
  GridCol,
  GridContainer,
  GridRow,
  Page,
  PaymentMethodSelector,
  Surface,
  TextField,
  Typography,
} from '../components'

export default function HomePage(): JSX.Element {
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
                id=""
                name=""
                placeholder=""
                value=""
                label="Data de saída"
              />
            </GridCol>
            <GridCol size={{ xs: 12, md: 6 }}>
              <TextField
                id=""
                name=""
                placeholder=""
                value=""
                label="Data de retorno"
              />
            </GridCol>
          </GridRow>

          <GridRow>
            <GridCol size={{ xs: 12, md: 6 }}>
              <TextField
                id=""
                name=""
                placeholder=""
                value=""
                label="Local de origem"
              />
            </GridCol>
            <GridCol size={{ xs: 12, md: 6 }}>
              <TextField
                id=""
                name=""
                placeholder=""
                value=""
                label="Local de chegada"
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

          <PaymentMethodSelector selected="CreditCard" onClick={console.log} />

          <Box>
            <Typography
              variant="headline6"
              onColor="surface"
              textAlign="center"
            >
              Quem vai viajar?
            </Typography>
          </Box>

          <TextField id="" name="" placeholder="" value="" label="Nome" />
          <TextField id="" name="" placeholder="" value="" label="Sobrenome" />

          <GridRow>
            <GridCol size={{ xs: 12, md: 6 }}>
              <TextField
                id=""
                name=""
                placeholder=""
                value=""
                label="País de residência"
              />
            </GridCol>
            <GridCol size={{ xs: 12, md: 6 }}>
              <TextField
                id=""
                name=""
                placeholder=""
                value=""
                label="Data de nascimento"
              />
            </GridCol>
          </GridRow>

          <TextField id="" name="" placeholder="" value="" label="CPF" />
          <TextField id="" name="" placeholder="" value="" label="Email" />
          <TextField id="" name="" placeholder="" value="" label="Telefone" />

          <Button color="primary" size={{ xs: 'fullWidth', md: 'normal' }}>
            Comprar
          </Button>
        </Surface>
      </GridContainer>
    </Page>
  )
}
