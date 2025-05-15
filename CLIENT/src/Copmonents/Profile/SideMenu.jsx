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

  return (
    <div className="w-full md:w-70 bg-gray-50 p-6 rounded-lg shadow-md overflow-hidden">
      <h2 className="text-xl font-semibold mb-5 text-gray-900 border-b border-gray-300 pb-3">
        Profile Steps
      </h2>
      <nav className="flex flex-col space-y-3">
        {steps.map(({ name, url, icon: Icon, optionalText }) => (
          <Link to={url} key={name} className="group">
            <button
              className={`w-full flex items-center justify-between p-3 rounded-md
                ${
                  data === name
                    ? "bg-white shadow-sm border-l-4 border-blue-600 text-blue-700 font-semibold"
                    : "bg-transparent text-gray-700 hover:bg-white hover:shadow-sm hover:border-l-4 hover:border-blue-300"
                }
                transition duration-200 ease-in-out`}
              style={{ outline: "none" }}
            >
              <div className="flex items-center space-x-2">
                <Icon
                  className={`h-5 w-5 flex-shrink-0
                    ${data === name ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}
                  `}
                />
                <span>{name}</span>
              </div>
              {optionalText && (
                <span className="text-sm italic text-gray-400">{optionalText}</span>
              )}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default SideMenu;
