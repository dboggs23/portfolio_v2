import React, { useState, useEffect, useContext } from "react";
import Header from "./header";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { myContext } from "../../provider";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  return (
    <myContext.Consumer>
      {(context) => (
        <div>
          <Header
            siteTitle={siteTitle}
            onHideNav={onHideNav}
            onShowNav={onShowNav}
            showNav={showNav}
            handleChecked={context.handleChecked}
            isChecked={context.isChecked}
          />

          <div className={styles.content}>{children}</div>
          {/*<footer className={styles.footer}>
                <div className={styles.footerWrapper}>
                  <div className={styles.siteInfo}></div>
                </div>
          </footer>*/}
        </div>
      )}
    </myContext.Consumer>
  );
};

export default Layout;
