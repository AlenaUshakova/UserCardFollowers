import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="200"
      width="200"
      ariaLabel="vortex-loading"
      wrapperStyle={{ position: 'absolute', top: '45%', left: '45%' }}
      wrapperClass="vortex-wrapper"
      colors={[
        '#5736A3',
        '#5736A3',
        '#5736A3',
        '#5736A3',
        '#5736A3',
        '#5736A3',
      ]}
    />
  );
};
