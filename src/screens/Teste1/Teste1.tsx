import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {useTheme} from 'styled-components';
import {Toast} from 'toastify-react-native';
import {
  ControlledSelect,
  ControlledTextInput,
  FillButton,
  NoFillButton,
} from '../../components';

export function Teste1() {
  const theme = useTheme();
  const navigation = useNavigation();
  const {control} = useForm();
  return (
    <ScrollView style={{flex: 1, padding: 16}}>
      <View style={{marginVertical: 8}}>
        <ControlledTextInput
          label="Input"
          control={control}
          name="value"
          placeholder="Input"
          keyboardType="numeric"
          placeholderTextColor={theme.colors.text}
          rules={{required: 'Campo obrigatório'}}
        />
      </View>

      <View style={{marginVertical: 8}}>
        <ControlledSelect
          placeholderText="Select"
          name="of"
          control={control}
          items={[]}
          label="Select"
          rules={{required: 'Campo obrigatório'}}
        />
      </View>

      <View>
        <View style={{marginVertical: 8}}>
          <View style={{marginVertical: 8}}>
            <FillButton
              text="NAVIGATE"
              onPress={() => navigation.navigate('Teste2')}
            />
          </View>

          <View style={{marginVertical: 8}}>
            <FillButton
              text="Toast1"
              colorText="yellow"
              bgColor="purple"
              onPress={() => Toast.warn('WARNING', 'top')}
              onLongPress={() => Toast.success('SUCCESS', 'top')
            }
            />
          </View>

          <View style={{marginVertical: 8}}>
            <FillButton text="Teste1" disabled />
          </View>

          <View style={{marginVertical: 8}}>
            <FillButton text="Teste1" loading disabled />
          </View>
        </View>

        <View style={{marginVertical: 8}}>
          <NoFillButton
            text="Toast2"
            onPress={() => Toast.error('ERROR', 'top')}
          />
        </View>

        <View style={{marginVertical: 8}}>
          <NoFillButton
            text="Toast3"
            colorText="green"
            borderColor="purple"
            onPress={() => Toast.info('INFO', 'top')}
          />
        </View>

        <View style={{marginVertical: 8}}>
          <NoFillButton text="Teste1" disabled />
        </View>

        <View style={{marginVertical: 8}}>
          <NoFillButton text="Teste1" loading disabled />
        </View>
      </View>
    </ScrollView>
  );
}
