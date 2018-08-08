// @flow

// provide a consistent wrapper around the libs guui depends on.

import { hydrate as hydrateCSS } from 'emotion';
import { extractCritical } from 'emotion-server';
import React, { Component } from 'react';
import { hydrate as hydrateApp, render } from 'react-dom';
import { renderToString as reactRenderToString } from 'react-dom/server';
import styled, { css } from 'react-emotion';

type renderToStringResult = {
    html: string,
    css: string,
    ids: Array<string>,
};

const renderToString = (ComponentToRender: React$Node): renderToStringResult =>
    extractCritical(reactRenderToString(ComponentToRender));

export {
    React,
    hydrateApp,
    render,
    renderToString,
    hydrateCSS,
    styled,
    css,
    Component,
};
