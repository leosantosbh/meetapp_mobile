import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  justify-content: center;
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

export const MyList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})`
  flex: 1 auto;
`;

export const Agend = styled.View`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  flex: 1 auto;
  justify-content: space-between;
  max-width: ${Dimensions.get('window').width - 60};
  margin: 0px 10px 20px 10px;
`;

export const AgendBanner = styled.Image`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: ${Dimensions.get('window').width - 60};
  height: 170px;
`;

export const AgendTitle = styled.Text`
  font-size: 22px;
  text-align: center;
  padding-top: -10px;
  font-weight: bold;
  color: #ffc;
`;

export const AgendDate = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 0 0 5px;
`;
export const AgendDateText = styled.Text`
  color: #ffc;
  margin-left: 5px;
`;
export const AgendLocation = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 5px 0 0 5px;
`;
export const AgendLocationText = styled.Text`
  color: #ffc;
  margin-left: 5px;
`;
export const AgendOwner = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 5px 0 0 5px;
`;
export const AgendOwnerText = styled.Text`
  color: #ffc;
  margin-left: 5px;
`;
export const UnsubscribeButton = styled(Button)`
  background: #e24040;
  margin: 5px;
  align-self: stretch;
`;
