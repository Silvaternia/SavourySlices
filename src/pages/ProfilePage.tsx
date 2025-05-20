import { useParams } from "react-router-dom";

function ProfilePage() {
    const params = useParams<{ profileId: string }>(); // This gives us access to the custom ID params in this file
    return <div>ProfilePage {params.profileId}</div>;
}

export default ProfilePage;
