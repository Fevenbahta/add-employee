import React from 'react';
import TextInput from '../components/common/inputs/TextInputs'
import SelectInput from '../components/common/inputs/SelectInputs'
import { ProfileForm, ProfileImage, TagSection } from '../components/common/ui/ProfileSections';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';


const Profile = () => {

    const employeeData = {
        avatar: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tools: ["Figma", "Sketch", "Adobe Illustrator", "Adobe Photoshop"],
        skills: ["UI/UX", "Web Design", "Landing Page Design", "Mobile App Design", "Product Design"]
    };

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' }
    ];

    return (
        <div className="flex min-h-screen bg-[#E9EBEA] text-gray-900">
           {/* Sidebar */}
             <aside className="fixed top-0 left-0 h-full overflow-y-scroll" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
               <Sidebar />
             </aside>
       
             {/* Main content */}
             <main className="ml-[260px] flex-1 p-6 overflow-y-auto justify-content-center">
               {/* Header */}
               <Header />
       
            {/* Profile */}
                <div className="p-4 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] items-start gap-6 sm:gap-8 lg:gap-10">

                        {/* Left Column */}
                        <div>
                            <div className="space-y-6">
                                <ProfileImage src={employeeData.avatar} alt="Profile" />
                                <TagSection title="Tools" items={employeeData.tools} />
                                <TagSection title="Skills" items={employeeData.skills} />
                            </div>

                        </div>

                        {/* Right Column - Form */}
                        <ProfileForm>
                            <TextInput
                                label="Employee Name"
                                required
                                placeholder="Name Here"
                                className="bg-[#f8f9fa]"
                            />
                            <TextInput
                                label="Department"
                                required
                                defaultValue="Graphic & UI/UX Design"
                                className="bg-[#f8f9fa]"
                            />
                            <SelectInput
                                label="Gender"
                                required
                                options={genderOptions}
                                className="bg-[#f8f9fa]"
                            />
                            <TextInput
                                label="Designation"
                                required
                                defaultValue="Senior UI/UX Designer"
                                className="bg-[#f8f9fa]"
                            />
                            <TextInput
                                label="Father Name"
                                required
                                placeholder="Name Here"
                                className="bg-[#f8f9fa]"
                            />
                            <TextInput
                                label="Work Experience"
                                required
                                defaultValue="9 Years"
                                className="bg-[#f8f9fa]"
                            />
                            <TextInput
                                label="Mobile No"
                                required
                                type="tel"
                                placeholder="+00 0000 0000"
                                className="bg-[#f8f9fa]"
                            />
                            <TextInput
                                label="Alternative Mobile No"
                                required
                                type="tel"
                                placeholder="+00 0000 0000"
                                className="bg-[#f8f9fa]"
                            />
                            <TextInput
                                label="Email Address"
                                required
                                type="email"
                                placeholder="example@gmail.com"
                                className="bg-[#f8f9fa]"
                            />
                            <TextInput
                                label="Complete Address"
                                required
                                placeholder="115, 1st Floor, Street No 12, New York City"
                                className="bg-[#f8f9fa]"
                            />
                        </ProfileForm>
                    </div>
                </div>
        </main>
        </div>
    );
}
export default Profile