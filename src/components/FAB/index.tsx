import React from 'react';
import { AntDesign } from '@expo/vector-icons'

import { TouchableOpacity, Gradient } from './styles';

export type FABProps = {
    onPress: () => void;
}

export const FAB = ({ onPress }: FABProps) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Gradient colors={['#8AB6F5', '#92A9F2', '#B274E4']}>
          <AntDesign name="plus" size={24} color="white" />
        </Gradient>
      </TouchableOpacity>
    )
}