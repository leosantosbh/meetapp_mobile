import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { StatusBar, TouchableOpacity, Alert } from 'react-native';
import { format, subDays, addDays, parseISO, getDate } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import api from '~/services/api';
import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import {
  Container,
  Title,
  LogoImage,
  ListData,
  MeetList,
  ListDateText,
  Meet,
  MeetTop,
  MeetFooter,
  MeetBanner,
  MeetTitle,
  MeetDescrition,
  MeetDate,
  MeetDateText,
  MeetLocation,
  MeetLocationText,
  SubscribeButton,
} from './styles';

function Meets({ isFocused, navigation }) {
  const [meets, setMeets] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get('metts', {
        params: {
          data: date.getTime(),
        },
      });
      setMeets(response.data);
    }
    if (isFocused) {
      loadAvailable();
    }
  }, [date, isFocused]);

  async function handleSubs(id, date, titulo) {
    try {
      await api.post(`agends/${id}/subscribe`, {
        date,
      });
      Alert.alert('Cadastro realizado com sucesso', `Evento: ${titulo}`);
      navigation.navigate('MyMeets');
    } catch (error) {
      Alert.alert('Falha ao cadastrar', error.response.data.error);
    }
  }

  function handlePrevDate() {
    const ndate = subDays(date, 1);
    if (getDate(ndate) < getDate(new Date())) {
      Alert.alert(
        'Erro na solicitação',
        'Não é possível se inscrever em eventos antigos'
      );
    } else {
      setDate(ndate);
    }
  }

  function handleNextDate() {
    const ndate = addDays(date, 1);
    setDate(ndate);
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#21578a" />
      <Container>
        <Title>
          <LogoImage source={logo} />
        </Title>
        <ListData>
          <TouchableOpacity onPress={() => handlePrevDate()}>
            <Icon name="keyboard-arrow-left" size={35} color="#FFF" />
          </TouchableOpacity>
          <ListDateText>
            {format(date, "dd 'de' MMMM", {
              locale: pt,
            })}
          </ListDateText>
          <TouchableOpacity onPress={() => handleNextDate()}>
            <Icon name="keyboard-arrow-right" size={35} color="#FFF" />
          </TouchableOpacity>
        </ListData>
        <MeetList
          data={meets}
          keyExtractor={meet => String(meet.id)}
          horizontal
          renderItem={({ item }) => (
            <Meet>
              <MeetTop>
                <MeetBanner source={{ uri: item.banner.url }} />
                <MeetTitle>{item.titulo}</MeetTitle>
                <MeetDescrition>{item.descricao}</MeetDescrition>
              </MeetTop>
              <MeetFooter>
                <MeetDate>
                  <Icon name="today" size={18} color="#ffc" />
                  <MeetDateText>
                    {format(parseISO(item.date), "dd 'de' MMMM 'às' HH':'mm", {
                      locale: pt,
                    })}
                  </MeetDateText>
                </MeetDate>
                <MeetLocation>
                  <Icon name="location-on" size={20} color="#ffc" />
                  <MeetLocationText>{item.local}</MeetLocationText>
                </MeetLocation>
                <SubscribeButton
                  onPress={() =>
                    handleSubs(item.id, parseISO(item.date), item.titulo)
                  }
                >
                  SUBSCRIBE
                </SubscribeButton>
              </MeetFooter>
            </Meet>
          )}
        />
      </Container>
    </Background>
  );
}

Meets.navigationOptions = {
  tabBarLabel: 'Meetups',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Meets);
