import React, { useState } from 'react';

const teamDetails = {
    grace: {
        name: 'Grace Kyomuhendo',
        qualifications: `
            <ul class="list-disc pl-5">
                <li>Bachelor’s Degree in Agronomy or Crop Science.</li>
                <li>5+ years of experience in agronomy and crop management.</li>
                <li>Expertise in sustainable farming practices and soil health.</li>
                <li>Strong problem-solving skills and attention to detail.</li>
                <li>Experience with agricultural data management systems.</li>
            </ul>
        `
    }
    // Add more team members here as needed
};

const TeamMembers = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleClick = (memberKey) => {
        setSelectedMember(teamDetails[memberKey]);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div
                className="w-64 h-32 bg-white text-black flex items-center justify-center rounded-lg border-4 border-blue-500 hover:border-blue-700 cursor-pointer transition duration-300 ease-in-out m-4"
                onClick={() => handleClick('grace')}
            >
                Grace Kyomuhendo
            </div>
            
            {selectedMember && (
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                    <h2 className="text-2xl font-bold mb-4">{selectedMember.name}</h2>
                    <div dangerouslySetInnerHTML={{ __html: selectedMember.qualifications }} />
                </div>
            )}
        </div>
    );
};

export default TeamMembers;
