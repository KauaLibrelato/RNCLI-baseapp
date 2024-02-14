import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text<{errorMessage?: boolean}>`
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
  ${({errorMessage, theme}) => errorMessage && `color: ${theme.colors.error}`};
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.error};
`;
