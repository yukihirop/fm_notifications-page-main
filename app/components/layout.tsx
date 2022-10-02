import React from 'react'

const Layout = ({ children }: React.PropsWithChildren) => {
  return <div className="w-screen h-screen flex justify-center">{children}</div>;
}

export default Layout
