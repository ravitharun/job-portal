import {
  UserIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  ArrowUpTrayIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function SideMenu({ data }) {
  const steps = [
    { name: "Personal Info", icon: UserIcon, url: "/Job/Profile" },
    { name: "Education", icon: AcademicCapIcon, url: "/Job/EducationForm" },
    { name: "Skills", icon: Cog6ToothIcon, url: "/Job/Skills" },
    {
      name: "Work Experience",
      icon: BriefcaseIcon,
      optionalText: "",
      url: "/Job/WorkExp",
    },
    { name: "Resume Upload", icon: ArrowUpTrayIcon, url: "/Job/resume" },
    {
      name: "Online Presence",
      icon: GlobeAltIcon,
      optionalText: "",
      url: "/Job/Online",
    },
  ];

  // Educational
  return (
    <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-6 border-b pb-3">Profile Steps</h2>
      <nav className="flex flex-col space-y-3 text-gray-700">
        {steps.map(({ name,url, icon: Icon, optionalText }) => (
          <Link to={url}>
            <button
              key={name}
              className={`text-left py-2 px-4 rounded-md font-semibold flex items-center justify-between hover:bg-gray-100 ${
                data == name ? "text-black bg-blue-200" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span>{name}</span>
              </div>
              {optionalText && (
                <span className="text-sm italic text-gray-500">
                  {optionalText}
                </span>
              )}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default SideMenu;
