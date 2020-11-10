import styled, { css } from 'styled-components';

const margin = css`
  margin: ${props => props.m || '0px'};
  margin-top: ${props => props.mt || '5px'};
  margin-right: ${props => props.mr || '0px'};
  margin-bottom: ${props => props.mb || '5px'};
  margin-left: ${props => props.ml || '0px'};
`

const padding = css`
  padding: ${props => props.p || '0px'};
  padding-top: ${props => props.pt || '20px'};
  padding-right: ${props => props.pr || '20px'};
  padding-bottom: ${props => props.pb || '20px'};
  padding-left: ${props => props.pl || '20px'};
`

export const Link = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.fs || '16px'};
  font-weight: ${props => props.fw || 400};
  color: ${props => props.color || 'white'};
  text-decoration: none;
  cursor: pointer;

  ${props => 
    props.underline ? css`
      &:hover {
        text-decoration: underline;
      }
    ` : null
  }
`

export const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 64px;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.h || '100vh'};
  background: ${props => props.bg || '#222222'};

  ${props => 
    props.top ? css`
      height: calc(100vh - 64px);
    ` : null
  }
`

export const Flex = styled.div`
  display: flex;
  height: ${props => props.h || 'auto'};
  width: ${props => props.w || 'auto'};
  max-width: ${props => props.mw || 'none'};
  flex-direction: ${props => props.fd || 'row'};
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'flex-start'};
  border-radius: ${props => props.br || '5px'};
  background: ${props => props.bg || 'white'};
  ${margin}
  ${padding}
`

export const Heading = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: ${props => props.fs || '30px'};
  font-weight: ${props => props.fw || 700};
  color: ${props => props.color || 'white'};
  ${margin}
`

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.fs || '16px'};
  font-weight: ${props => props.fw || 400};
  color: ${props => props.color || 'white'};
  ${margin}
`

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.fs || '20px'};
  height: ${props => props.h || '40px'};
  width: ${props => props.w || '150px'};
  border-radius: 10px;
  font-weight: 700;
  outline: none !important;
  cursor: pointer;
  border: none;
  opacity: 1;
  ${margin}

  &:hover {
    border-radius: 25px;
    opacity: 0.9;
  }

  ${props =>
    props.primary ? css`
      color: white;
      background: ${props => props.color || '#222222'};
    ` : css`
      color: ${props => props.color || '#222222'};
      background: white;
    `
  }
`

export const Label = styled(Text)`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 0px;
  align-self: flex-start;
`

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.fs || '1rem'};
  height: ${props => props.h || 'calc(1.5em + .75rem + 2px)'};
  width: ${props => props.w || 'calc(100% - 20px)'};
  padding-left: 10px;
  padding-right: 10px;
  border: #ededed 1px solid;
  border-radius: 5px;
  outline: none !important;
  ${margin}
`