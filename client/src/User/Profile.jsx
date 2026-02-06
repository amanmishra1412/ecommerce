import React from "react";

const Profile = () => {
    return (
        <div>
            <h2 className="text-xl font-medium mb-4">Profile</h2>

            <div className="space-y-4 text-sm">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        className="border w-full px-3 py-2"
                        value="Aarav Sharma"
                    />
                </div>

                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        className="border w-full px-3 py-2"
                        value="aarav@email.com"
                    />
                </div>

                <button className="bg-green-900 text-white px-6 py-2 mt-4">
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;
