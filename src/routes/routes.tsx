import React, {FC} from 'react';
import {HashRouter, Navigate, Outlet, Route, Routes, useParams} from 'react-router-dom';
import i18n from 'i18next';
import MapView from '../views/Map';

const LangSetter: FC = () => {
  const {lang} = useParams();
  if (i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  }
  return <Outlet/>;
};

const AppRoutes: FC = () =>
  <HashRouter>
    <Routes>
      <Route path=":lang" element={<LangSetter/>}>
        <Route path="" element={<Navigate to="map"/>}/>
        <Route path="map" element={<MapView/>}/>
        {/*
         <Route path="detail" element={<Layout mainContent={<MapView/>} miniSidePanelSelectedActionId='detail'/>}/>
        */}
        <Route path="*" element={<>404</>}/>
      </Route>
      <Route path="*" element={<Navigate to={i18n.resolvedLanguage || 'es'}/>}/>
    </Routes>
  </HashRouter>;

export default AppRoutes;
