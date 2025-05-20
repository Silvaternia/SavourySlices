import { NavLink, Outlet } from "react-router-dom";

const profiles = [1, 2, 3];

function ProfilesPage() {
    return (
        <div className="flex flex-col gap-2">
            {profiles.map((profile) => (
                <NavLink
                    key="profile"
                    to={`/profiles/${profile}`}
                    className={({ isActive }) => {
                        return isActive ? "text-primary" : "";
                    }}
                >
                    Profile ${profile}
                </NavLink>
            ))}
            {/* Outlet is used to render child components specified in children:[{}] */}
            <Outlet />
        </div>
    );
}

export default ProfilesPage;
