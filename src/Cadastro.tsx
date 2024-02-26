import { VStack, Image, Text, Box, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';

export default function Cadastro() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        Cadastro
      </Titulo>
      <Box>
        <EntradaTexto
          label="Tipo de vinho"
          placeholder="Insira o tipo do vinho"
        />
        <EntradaTexto
          label="País"
          placeholder="Insira país origem"
        />
        <EntradaTexto
          label="Uva"
          placeholder="Insira tipo da uva"
        />
      </Box>
      <Botao>Salvar</Botao>

     

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Salvar imagem</Text>

      </Box>
    </VStack>
  );
}