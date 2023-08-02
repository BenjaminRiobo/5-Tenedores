import React, { useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { Icon, Avatar, Text } from '@rneui/base';
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { LoadingModal } from "../../../Shared";
import { styles } from './UploadImagesForm.styles';


export function UploadImagesForm(props) {
    const { formik } = props;

    const [isLoading, setIsLoading] = useState(false)

    const openGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setIsLoading(true);
            uploadImage(result.uri);
        }
    };

    const uploadImage = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        const storage = getStorage();
        const storageRef = ref(storage, `restaurants/${uuid()}`);

        uploadBytes(storageRef, blob).then((snapshot) => {
            updatePhotosRestaurant(snapshot.metadata.fullPath);

        });
    };

    // imagePath se encuentra dentro del Snapshot.
    const updatePhotosRestaurant = async (imagePath) => {
        const storage = getStorage();
        const imageRef = ref(storage, imagePath);

        const imageUrl = await getDownloadURL(imageRef);

        //Con los 3 puntos dentro del array se esta tomando las imagenes que ya hay dentro de la variable y agregando una nueva.
        formik.setFieldValue("images", [...formik.values.images, imageUrl]);

        setIsLoading(false);
    };

    return (
        <>
            <View style={styles.viewImage}>
                <Icon
                    type="material-community"
                    name="camera"
                    color="#a7a7a7"
                    containerStyle={styles.containerIcon}
                    onPress={openGallery}
                />
            </View>
            <Text style={styles.error}>{formik.errors.images}</Text>
            <LoadingModal show={isLoading} text="Subiendo imagen" />
        </>
    );
}