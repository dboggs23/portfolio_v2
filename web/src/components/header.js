import { Link } from "gatsby";
import React, { useState } from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import DarkModeSwitch from "./ui-components/dark-mode-switch";
import Toggle from "react-toggle";

import * as styles from "./header.module.css";

const Header = ({
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  handleChecked,
  checked,
  isDark,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to="/">{siteTitle}</Link>
        </div>

        <nav>
          <ul>
            {/*<li>
              <Link to="/about/">About</Link>
            </li>*/}
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
          </ul>
        </nav>
        <DarkModeSwitch checked={checked} handleChecked={handleChecked} />
      </div>
    </div>
  );
};

export default Header;
