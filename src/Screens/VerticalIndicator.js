import StepIndicator from 'react-native-step-indicator';
import React, {useState} from 'react';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

const VerticalIndicator = () => {
  const {t, i18n} = useTranslation();

  const labels = [
    t('Cart'),
    t('Delivery address'),
    t('Order Summary'),
    t('Payment method'),
  ];

  const [currentState, setCurrentState] = useState(0);
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 25,
    separatorStrokeWidth: 4,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#03204c',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#03204c',
    stepStrokeUnFinishedColor: '#03204c',
    separatorFinishedColor: '#03204c',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#03204c',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#03204c',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#ffffff',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#03204c',
    stepCount: 4,
  };

  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={currentState}
      labels={labels}
      direction="vertical"
      stepCount="4"
    />
  );
};
export default VerticalIndicator;
