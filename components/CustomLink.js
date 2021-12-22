/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';

const CustomLink = ({ href, ...rest }) => {
  const isInternalCustomLink = href && href.startsWith('/');
  const isAnchorCustomLink = href && href.startsWith('#');

  if (isInternalCustomLink) {
    return (
      <CustomLink href={href}>
        <a {...rest} />
      </CustomLink>
    );
  }

  if (isAnchorCustomLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
