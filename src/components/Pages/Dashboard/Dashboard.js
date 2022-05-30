import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden flex justify-end">Open drawer</label>
                    <h2 className='text-2xl text-primary text-center'>My Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard' >My Orders</Link></li>
                        <li><Link to='/dashboard/review'>Add a Review</Link></li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;