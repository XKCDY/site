import React from 'react';

const Link = ({children, ...props}) => <a {...props} className="text-blue-500 hover:text-blue-600">{children}</a>;

export default Link;
