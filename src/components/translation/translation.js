import React from 'react';
import { useTranslation } from 'react-i18next';


const HOC = Component => {
    // const { t, i18n } = useTranslation();
    return class extends React.Component {
        render() {
            return (
                <Component
                    {...this.props}

                />
            );
        }
    };

};

export default HOC;
