import React from 'react';
import { Route, Routes } from 'react-router';
import { SamplePage } from '../pages';

export const Router: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<SamplePage />} />
            <Route element={undefined} />
        </Routes>
    );
};