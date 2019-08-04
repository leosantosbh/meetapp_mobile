import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
`;

export const Title = styled.View`
  justify-content: center;
  align-items: center;
  height: 75px;
  align-self: stretch;
  margin-top: 0px;
  background: #21578a;
`;

export const LogoImage = styled.Image`
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 40 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: #339431;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #e24040;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;
