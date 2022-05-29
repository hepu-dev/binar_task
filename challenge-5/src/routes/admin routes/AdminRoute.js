import { Fragment } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdministratorDashboardLayout from "../../layouts/AdministratorDashbordLayout";
import Cars from "../../pages/administrator/cars/cars";
import Dashboard from "../../pages/administrator/dashboard/dashboard";
import AddOrEditCars from "../../pages/administrator/cars/addOrEditCars";


const ProtectedUserRoute = () => {
    if (!localStorage.getItem("access_token")) {
      return <Navigate to="/login" replace />
    }
    return <Outlet />;
}

function AdminRoute() {
    return (
      <Fragment>

        <Routes>
            <Route element={<ProtectedUserRoute />}>
                <Route element={<AdministratorDashboardLayout menu="DASHBOARD" menuList={[{listName: "Dashboard", link: "/dashboard"}]} />}>
                    <Route path='dashboard' element={<Dashboard />} />
                </Route>
                <Route element={<AdministratorDashboardLayout menu="CARS" menuList={[{listName: "List Cars", link: "/cars"}]} />}>
                    <Route path="cars" element={<Cars />}/>
                    <Route path="cars/addcars" element={<AddOrEditCars />} />
                    <Route path="cars/editcars" element={<AddOrEditCars />} />
                </Route>
            </Route>
        </Routes>
  
      </Fragment>
    );
  }
  
  export default AdminRoute;
  