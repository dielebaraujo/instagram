import * as Styled from "./styled";

function Error() {
  return (
    <section>
      <Styled.ContainerError>
        <Styled.TitleError>Está página não está disponível.</Styled.TitleError>
        <Styled.TextError>
          O link em que você clicou pode não estar funcionando, ou a página pode
          ter sido removida.
        </Styled.TextError>
        <Styled.LinkText href="/">Voltar para o Instagram</Styled.LinkText>
      </Styled.ContainerError>
      <Styled.FooterError>
        <Styled.LinkFooter href="https://about.facebook.com/meta">
          Meta
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://about.instagram.com/">
          Sobre
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://about.instagram.com/blog/">
          Blog
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://www.instagram.com/about/jobs/">
          Carreiras
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://help.instagram.com/">
          Ajuda
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://developers.facebook.com/docs/instagram">
          API
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://www.instagram.com/legal/privacy/">
          Privacidade
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://www.instagram.com/legal/terms/">
          Termos
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://www.instagram.com/directory/profiles/">
          Principais contas
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://www.instagram.com/directory/hashtags/">
          Hashtags
        </Styled.LinkFooter>
        <Styled.LinkFooter href="https://www.instagram.com/explore/locations/">
          Localizações
        </Styled.LinkFooter>
      </Styled.FooterError>
    </section>
  );
}

export default Error;
