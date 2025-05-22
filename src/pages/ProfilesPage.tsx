import { NavLink, Outlet } from "react-router-dom";

const profiles = [
    { id: 1, title: "my profile" },
    { id: 2, title: "my profile 2" },
    { id: 3, title: "my profile 3" },
];

function ProfilesPage() {
    return (
        <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-4">
                {profiles.map((item) => (
                    <NavLink
                        key={item.id}
                        to={`/profiles/${item.id}`}
                        className={({ isActive }) => {
                            return isActive ? "text-primary" : "";
                        }}
                    >
                        Profile ${item.title}
                    </NavLink>
                ))}
            </ul>
            {/* Outlet is used to render child components specified in children:[{}] */}
            <Outlet />
        </div>
    );
}

export default ProfilesPage;
