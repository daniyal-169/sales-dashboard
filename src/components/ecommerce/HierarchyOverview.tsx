import React from "react";
import { TeamMember } from "../../Types/allTypes";



interface TeamProps {
    members: TeamMember[];
}





const HierarchyOverview: React.FC<TeamProps> = ({ members }) => {
    return (
        <div className="flex flex-wrap mb-5 rounded-2xl border border-gray-200 bg-white  dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="w-full max-w-full mx-auto border-gray-200 bg-white  dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="relative flex-[1_auto] flex flex-col break-words min-w-0  m-5">
                    <div className="flex-auto block py-8 px-9">
                        <div>
                            <div className="mb-9">
                                <h1 className="mb-2 text-[1.75rem] font-semibold text-gray-800 dark:text-white/90">
                                    Our Executive Team
                                </h1>
                                <span className="text-[1.15rem] font-medium text-muted text-gray-800 dark:text-white/90">
                                    Meet our talented team, a dynamic group of experts driven by passion and innovation.
                                </span>
                            </div>

                            <div className="flex flex-wrap w-full">
                                {members.map((member, index) => (
                                    <div key={index} className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                                        <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                            <img
                                                className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                src={member.image}
                                                alt={member.name}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out text-gray-800 dark:text-white/90"
                                            >
                                                {member.name}
                                            </a>
                                            <span className="block font-medium text-muted text-gray-800 dark:text-white/90">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default HierarchyOverview;
