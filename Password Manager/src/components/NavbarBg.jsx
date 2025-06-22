import React from 'react'

const NavbarBg = (props) => {
  return (
    <div className="text-white text-2xl px-10 flex justify-between inset-0 -z-10 h-16 max-w-screen items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {props.children}
    </div>
  )
}

export default NavbarBg