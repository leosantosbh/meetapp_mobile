import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;

  align-items: center;
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

export const ListData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 10px;
`;

export const ListDateText = styled.Text`
  color: #fff;
  font-weight: bold;
  padding-top: 3px;
  font-size: 20px;
`;

export const List = styled.FlatList`
  padding-top: 10px;
`;

export const Meet = styled.View`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  flex: 1;
  justify-content: space-between;
  max-width: ${Dimensions.get('window').width - 60};
  margin: 0px 10px 10px 10px;
`;

export const MeetTop = styled.View``;

export const MeetFooter = styled.View``;

export const MeetBanner = styled.Image`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: ${Dimensions.get('window').width - 60};
  height: 170px;
`;
export const MeetTitle = styled.Text`
  font-size: 22px;
  text-align: center;
  padding-top: -10px;
  font-weight: bold;
  color: #ffc;
`;

export const MeetDescrition = styled.Text.attrs({
  numberOfLines: 6,
})`
  margin: 5px;
  font-size: 16px;
  color: #ffc;
`;

export const MeetDate = styled.View`
  padding-top: 30px;
  margin-left: 5px;
  flex-direction: row;
  align-items: center;
`;
export const MeetDateText = styled.Text`
  color: #ffc;
  margin-left: 5px;
`;

export const MeetLocation = styled.View`
  padding-top: 15px;
  margin-left: 5px;
  flex-direction: row;
  align-items: center;
`;
export const MeetLocationText = styled.Text`
  color: #ffc;
  margin-left: 5px;
`;

export const SubscribeButton = styled(Button)`
  background: #339431;
  margin: 5px;
  align-self: stretch;
`;
