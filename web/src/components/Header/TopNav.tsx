import styled from '@emotion/styled';
import { useMantineTheme } from '@mantine/core';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { generateUuid } from '../../utils/general.utils';

interface NavLinkProps extends LinkProps {
  text: string;
}
const NavLink = (props: NavLinkProps) => {
  const { colors, fontSizes } = useMantineTheme();
  const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    font-size: ${fontSizes.md}px;
    color: ${colors.gray[2]};
    padding: 8px 12px;
    line-height: 1;
    &:hover {
      color: ${colors.yellow[2]};
    }
  `;
  const { text, ...rest } = props;
  return (
    <li style={{ listStyle: 'none' }}>
      <StyledLink {...rest}>{text}</StyledLink>
    </li>
  );
};

interface TopNavProps {
  links: { text: string; link: string }[];
}
function TopNav(props: TopNavProps) {
  const { links } = props;

  const NavList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  `;
  return (
    <nav>
      <NavList>
        {links.map(({ link, text }) => {
          const id = generateUuid();
          return <NavLink key={id} text={text} to={link} />;
        })}
      </NavList>
    </nav>
  );
}

export default TopNav;
