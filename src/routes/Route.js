import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
   component: Component,
   isPrivate,
   ...rest
}) {
   const signed = false;

   if (!signed && isPrivate) {
      return <Redirect to="/" />;
   }

   if (signed && !isPrivate) {
      return <Redirect to="/dashboard" />;
   }

   return <Route {...rest} component={Component} />;
}

// define quais serão as propriedades
RouteWrapper.propTypes = {
   isPrivate: PropTypes.bool,
   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired, // define que a propriedade component pode aceitar funcion ou class
};

// define os valores default
RouteWrapper.defaultProps = {
   isPrivate: false,
};
