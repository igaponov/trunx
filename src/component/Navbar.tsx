import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

import {
  IMainColorsProps,
  IShadeColorsProps,
  mainColorsPropsToClassnames,
  shadeColorsPropsToClassnames,
} from "./modifiers"

interface INavbarProps extends IMainColorsProps,
                               IShadeColorsProps,
                               React.HTMLAttributes<HTMLElement> {
  hasShadow?: boolean
  isFixedBottom?: boolean
  isFixedTop?: boolean
  isTransparent?: boolean
  isUnselectable?: boolean
}

interface INavbarBurgerProps {
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

interface INavbarItemDivProps {
  hasDropdown?: boolean
  isActive?: boolean
  isHoverable?: boolean
}

interface INavbarItemProps extends INavbarItemDivProps {
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

interface INavbarMenuProps {
  isActive?: boolean
}

class NavbarBrand extends React.Component {
  render() {
    return (
      <div className="navbar-brand">{this.props.children}</div>
    )
  }
}

class NavbarBurger extends React.Component<INavbarBurgerProps> {
  render() {
    const {
      isActive,
      onClick,
    } = this.props

    const className = classnames("navbar-burger", {
      "is-active": isActive,
    })

    return (
      <a
        className={className}
        role="button"
        aria-label="menu"
        aria-expanded={isActive ? "true" : "false"}
        onClick={onClick}
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    )
  }
}

class NavbarDivider extends React.Component {
  render() {
    return (
      <hr className="navbar-divider" />
    )
  }

  shouldComponentUpdate() { return false }
}

class NavbarDropdown extends React.Component {
  render() {
    return (
      <div className="navbar-dropdown">{this.props.children}</div>
    )
  }
}

class NavbarEnd extends React.Component {
  render() {
    return (
      <div className="navbar-end">{this.props.children}</div>
    )
  }
}

class NavbarItemDiv extends React.Component<INavbarItemDivProps> {
  render() {
    const {
      hasDropdown,
      isActive,
      isHoverable,
      ...props
    } = this.props

    const className = classnames("navbar-item",
      {
        "has-dropdown": hasDropdown,
        "is-active": isActive,
        "is-hoverable": isHoverable,
      },
    )

    return (
      <div {...props} className={className}>
        {this.props.children}
      </div>
    )
  }
}

class NavbarItem extends React.Component<INavbarItemProps> {
  static Div = NavbarItemDiv

  render() {
    const {
      download,
      hasDropdown,
      href,
      isActive,
      isHoverable,
      onClick,
      target,
      ...props
    } = this.props

    const className = classnames("navbar-item",
      {
        "has-dropdown": hasDropdown,
        "is-active": isActive,
        "is-hoverable": isHoverable,
      },
    )

    if (hasDropdown) {
      return (
        <div className={className}>{this.props.children}</div>
      )
    } else {
      return (
        <Anchor
          {...props}
          className={className}
          download={download}
          href={href}
          onClick={onClick}
          target={target}
        >
          {this.props.children}
        </Anchor>
      )
    }
  }
}

class NavbarLink extends React.Component {
  render() {
    return (
      <a className="navbar-link">{this.props.children}</a>
    )
  }
}

class NavbarMenu extends React.Component<INavbarMenuProps> {
  render() {
    const {
      isActive
    } = this.props

    const className = classnames("navbar-menu", {
      "is-active": isActive,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class NavbarStart extends React.Component {
  render() {
    return (
      <div className="navbar-start">{this.props.children}</div>
    )
  }
}

export default class Navbar extends React.Component<INavbarProps> {
  static Brand = NavbarBrand
  static Burger = NavbarBurger
  static Divider = NavbarDivider
  static Dropdown = NavbarDropdown
  static End = NavbarEnd
  static Item = NavbarItem
  static Link = NavbarLink
  static Menu = NavbarMenu
  static Start = NavbarStart

  componentDidMount() {
    const {
      isFixedBottom,
      isFixedTop,
    } = this.props

    if (isFixedTop) {
      document.body.classList.add("has-navbar-fixed-top")
    }

    if (isFixedBottom) {
      document.body.classList.add("has-navbar-fixed-bottom")
    }
  }

  componentWillUnmount() {
    const {
      isFixedBottom,
      isFixedTop,
    } = this.props

    if (isFixedBottom) {
      document.body.classList.remove("has-navbar-fixed-bottom")
    }

    if (isFixedTop) {
      document.body.classList.remove("has-navbar-fixed-top")
    }
  }

  render() {
    const {
      isBlack,
      isDark,
      isDanger,
      isFixedBottom,
      isFixedTop,
      isLight,
      isLink,
      isInfo,
      isPrimary,
      isSuccess,
      isTransparent,
      isUnselectable,
      isWarning,
      isWhite,
      ...props
    } = this.props

    const className = classnames("navbar",
      {
        "is-fixed-bottom": isFixedBottom,
        "is-fixed-top": isFixedTop,
        "is-transparent": isTransparent,
        "is-unselectable": isUnselectable,
      },
      mainColorsPropsToClassnames({
        isDanger,
        isInfo,
        isLink,
        isPrimary,
        isSuccess,
        isWarning,
      }),
      shadeColorsPropsToClassnames({
        isBlack,
        isDark,
        isLight,
        isWhite,
      }),
    )

    return (
      <nav {...props} className={className}>{this.props.children}</nav>
    )
  }
}
