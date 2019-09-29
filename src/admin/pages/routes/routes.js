import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PublicIcon from '@material-ui/icons/Public';
import PersonIcon from '@material-ui/icons/Person';
// import ContactsIcon from '@material-ui/icons/Contacts';
// import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PermMediaIcon from '@material-ui/icons/PermMedia';


const routes = [
    { path: '', text: 'Главная', Icon: <HomeIcon /> },
    { path: '/blog', text: 'Блог', Icon: <PublicIcon /> },
    { path: '/categories', text: 'Категории', Icon: <BookmarksIcon /> },
    { path: '/news', text: 'Новости', Icon: <PersonIcon /> },
    { path: '/media', text: 'Медиафайлы', Icon: <PermMediaIcon /> }
];

export default routes;
