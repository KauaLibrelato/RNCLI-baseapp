import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {PickerSelect} from './PickerSelect/PickerSelect';

export function ControlledSelect<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  items,
  placeholderText,
  placeholderColor,
}: UseControllerProps<FormType> &
  TextInputProps & {
    label?: string;
    placeholderText?: string;
    placeholderColor?: string;
    items: {label: string; value: string}[];
  }) {
  return (
    <Controller
      control={control}
      render={({field, fieldState}) => (
        <PickerSelect
          label={label}
          items={items}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          errorMessage={fieldState.error?.message}
          placeholder={{
            label: placeholderText ?? 'Selecione',
            value: '',
            color: placeholderColor ?? 'rgba(0, 0, 0, 0.1)',
          }}
        />
      )}
      name={name}
      rules={rules}
    />
  );
}
