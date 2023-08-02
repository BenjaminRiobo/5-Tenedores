import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/base';
import { useFormik } from 'formik';
import { InfoForm, UploadImagesForm } from '../../../components/Restaurants/AddRestaurant';
import { initialValues, validationSchema } from './AddRestaurantScreen.data';
import { styles } from './AddRestaurantScreen.styles';

export function AddRestaurantScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });


  return (
    <View>
      <InfoForm formik={formik} />

      <UploadImagesForm formik={formik} />

      <Button
        title="Crear restaurante"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}