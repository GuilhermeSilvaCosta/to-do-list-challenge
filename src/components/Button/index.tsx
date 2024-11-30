import React from 'react';
import { ActivityIndicator } from 'react-native';

import { TouchableOpacity, ButtonText, Gradient } from './styles';

export type ButtonProps = {
    onPress: () => void;
    children: React.ReactNode;
    loading?: boolean;
}

export const Button = ({ children, onPress, loading }: ButtonProps) => (
    <TouchableOpacity onPress={onPress} disabled={!!loading}>
        <Gradient colors={['#8AB6F5', '#92A9F2', '#B274E4']}>
            {!loading && <ButtonText>{children}</ButtonText>}
            {!!loading && <ActivityIndicator size="small" color="FFF" />}
        </Gradient>
    </TouchableOpacity>
)