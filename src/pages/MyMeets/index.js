import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { StatusBar, View, Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import api from '~/services/api';

import {
  Container,
  Title,
  LogoImage,
  MyList,
  Agend,
  AgendBanner,
  AgendTitle,
  AgendDate,
  AgendDateText,
  AgendLocation,
  AgendLocationText,
  AgendOwner,
  AgendOwnerText,
  UnsubscribeButton,
} from './styles';

function MyMeets({ isFocused }) {
  const [agends, setAgends] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function loadAgend() {
    const response = await api.get('agends');

    setAgends(response.data);
    setRefreshing(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadAgend();
    }
  }, [isFocused]);

  function refreshList() {
    setRefreshing(true);
    loadAgend();
  }

  async function handleRemove(id) {
    try {
      await api.delete(`agends/${id}`);
      refreshList();
    } catch (error) {
      Alert.alert('Erro na requisição', error.response.data.error);
    }
  }

  function renderSeparator() {
    return (
      <View
        style={{
          height: 1,
        }}
      />
    );
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#21578a" />
      <Container>
        <Title>
          <LogoImage source={logo} />
        </Title>
        <MyList
          data={agends}
          keyExtractor={agend => String(agend.id)}
          renderItem={({ item }) => (
            <Agend>
              <AgendBanner source={{ uri: item.mett.banner.url }} />
              <AgendTitle>{item.mett.titulo}</AgendTitle>
              <AgendDate>
                <Icon name="today" size={18} color="#ffc" />
                <AgendDateText>
                  {format(
                    parseISO(item.mett.date),
                    "dd 'de' MMMM 'às' HH':'mm",
                    {
                      locale: pt,
                    }
                  )}
                </AgendDateText>
              </AgendDate>
              <AgendLocation>
                <Icon name="location-on" size={20} color="#ffc" />
                <AgendLocationText>{item.mett.local}</AgendLocationText>
              </AgendLocation>
              <AgendOwner>
                <Icon name="person" size={20} color="#ffc" />
                <AgendOwnerText>{`Owner: ${item.mett.user.name}`}</AgendOwnerText>
              </AgendOwner>
              <UnsubscribeButton onPress={() => handleRemove(item.id)}>
                UNSUBSCRIBE
              </UnsubscribeButton>
            </Agend>
          )}
          onRefresh={refreshList}
          refreshing={refreshing}
          ItemSeparatorComponent={renderSeparator}
        />
      </Container>
    </Background>
  );
}

MyMeets.navigationOptions = {
  tabBarLabel: 'My Meetups',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(MyMeets);
