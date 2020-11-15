import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import MenuComponent from '../components/menu';
// import Loading from '../components/loading';

const RouteWrapper = ({
  component, isProtected, isAdminProtected, ...rest
}) => {
  const isSigned = useSelector((state) => state.auth.signed);
//   const isAdmin = useSelector((state) => state.user.profile.admin);

  if (isProtected && !isSigned) return <Redirect to="/login" />;

  if (!isProtected && isSigned) return <Redirect to="/" />;

//   if (isAdminProtected && !isAdmin) return <Redirect to="/" />;

  return (
    <MenuComponent show={!!isSigned}>
       {/* <Suspense fallback={<Loading />}> */}
        <Route component={component} {...rest} />
       {/* </Suspense> */}
    </MenuComponent>
  );
};

export default RouteWrapper;