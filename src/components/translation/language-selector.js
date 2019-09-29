import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = event => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div onChange={changeLanguage}>
            <input type="radio" value="en" name="language" defaultChecked={true} /> English
            <input type="radio" value="uk" name="language" /> Украинский
            <input type="radio" value="ru" name="language" /> Русский
        </div>
    );
};

export default LanguageSelector;
