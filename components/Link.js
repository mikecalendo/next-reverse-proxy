import NextLink from 'next/link';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Link = ({ children, ...props }) => (
  <NextLink
    {...props}
    as={`${publicRuntimeConfig.basePath || ''}${format(props.href)}`}
  >
    {children}
  </NextLink>
);

export default Link;
