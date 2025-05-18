import { Description } from "@headlessui/react";
import Navbar from "./Navbar";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import {
  FaBriefcase,
  FaBuilding,
  FaDollarSign,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthChecking from "./Auth/AuthChecking";
import CheckLocal from "./Auth/CheckLocal";



function Home() {
  // company url to display
  const copmany_url = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://s.yimg.com/fz/api/res/1.2/Z5HtzNbMBoqVz3ThOQIcmg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTY2/https://s.yimg.com/zb/imgv1/9adafff1-85af-34ef-95cc-a848ad6b4a4d/t_500x300",
    "	https://s.yimg.com/fz/api/res/1.2/_Q6zhu372kE__Fkv7np8Jg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTIw/https://s.yimg.com/zb/imgv1/2cc2074d-9408-3c85-a3a8-6bc85315781d/t_500x300",
    "	https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",

    // Add more company URLs here as needed
  ];
  const topPlacements = [
    {
      name: "Ravi",
      Profile_Url:
        "https://tse1.mm.bing.net/th?id=OIP.5B5h8DZIWJtlnLF0XbWzowHaEK&pid=Api&P=0&h=180",
      role: "Software Engineer",
      company: "TCS",
      location: "Hyderabad",
      salary: "15 LPA",
      department: "Computer Science Engineering",
      graduationYear: "2024",
      description: "Secured top position with hands-on skills in MERN stack.",
    },
    {
      name: "Sneha",
      role: "Data Scientist",
      company: "Amazon",
      location: "Bangalore",
      department: "Computer Science Engineering",
      graduationYear: "2024",
      Profile_Url:
        "https://tse1.mm.bing.net/th?id=OIP.5B5h8DZIWJtlnLF0XbWzowHaEK&pid=Api&P=0&h=180",
      salary: "32 LPA",
      description: "Excelled in machine learning and data analysis projects.",
    },
    {
      name: "Arjun",
      role: "AI Engineer",
      department: "Computer Science Engineering",
      graduationYear: "2024",
      company: "Google",
      location: "Hyderabad",
      Profile_Url:
        "https://tse1.mm.bing.net/th?id=OIP.5B5h8DZIWJtlnLF0XbWzowHaEK&pid=Api&P=0&h=180",
      salary: "40 LPA",
      description:
        "Specialized in deep learning and NLP, cracked Google AI team.",
    },
    {
      name: "Megha",
      role: "Frontend Developer",
      department: "Computer Science Engineering",
      graduationYear: "2024",
      company: "Microsoft",
      location: "Noida",
      salary: "28 LPA",
      Profile_Url:
        "https://tse1.mm.bing.net/th?id=OIP.5B5h8DZIWJtlnLF0XbWzowHaEK&pid=Api&P=0&h=180",
      description: "Top scorer in system design interviews and UI excellence.",
    },
    {
      name: "Karan",
      role: "DevOps Engineer",
      department: "Computer Science Engineering",
      graduationYear: "2024",
      company: "Cisco",
      location: "Chennai",
      salary: "22 LPA",
      Profile_Url:
        "https://tse1.mm.bing.net/th?id=OIP.5B5h8DZIWJtlnLF0XbWzowHaEK&pid=Api&P=0&h=180",
      description:
        "Built cloud CI/CD pipelines and passed expert level certifications.",
    },
    {
      name: "Divya",
      role: "Software Analyst",
      department: "Computer Science Engineering",
      graduationYear: "2024",
      Profile_Url:
        "https://tse1.mm.bing.net/th?id=OIP.5B5h8DZIWJtlnLF0XbWzowHaEK&pid=Api&P=0&h=180 ",
      company: "Infosys",
      location: "Pune",
      salary: "18 LPA",
      description:
        "Recognized for automation and clean architecture solutions.",
    },
    {
      name: "Rahul",
      role: "Backend Developer",
      department: "Computer Science Engineering",
      Profile_Url: "https://example.com/profile.jpg",
      graduationYear: "2024",
      company: "Flipkart",
      location: "Bangalore",
      salary: "24 LPA",
      description: "Optimized Node.js services and handled large-scale APIs.",
    },
  ];
  const faqs = [
    {
      question: "How do I apply for jobs?",
      answer:
        "You can search for jobs using the search bar or browse by category. Click on any job to view details and apply directly using your resume or profile.",
    },
    {
      question: "Is it free to create an account?",
      answer:
        "Yes! Creating a job seeker account is completely free. Employers may have premium listing options.",
    },
    {
      question: "Can I apply for remote jobs?",
      answer:
        "Absolutely! Use the 'Remote' filter on the job listings page to view only remote opportunities.",
    },
    {
      question: "How do I track my job applications?",
      answer:
        "Once logged in, go to your dashboard and check your application history to see the status of jobs you've applied to.",
    },
    {
      question: "What if I forget my password?",
      answer:
        "Click on the 'Forgot Password?' link on the login page and follow the instructions to reset it via email.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  


  return (
    <>
      <AuthChecking />
      <CheckLocal />
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6 text-center md:text-left md:px-16">
        <div className="max-w-4xl mx-auto">
          <center>
            {" "}
            <h3 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6 leading-tight">
              Find Your Dream Job. <br className="hidden md:block" /> Build Your
              Future.
            </h3>
          </center>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Discover thousands of opportunities from top companies across the
            globe. Whether you're starting your career or looking for your next
            big role — we've got you covered.
          </p>
          <center>
            <Link to="/search">
              <div className="flex justify-center md:justify-start">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                  Start Searching
                </button>
              </div>
            </Link>
          </center>
        </div>
      </div>
      <br />
      <section className="bg-white py-16 px-4 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <button
                  className="w-full text-left font-medium text-lg flex justify-between items-center"
                  onClick={() => toggle(index)}
                >
                  {faq.question}
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* placement people */}

      <section className="py-10 bg-gray-50 w-full">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8 font-poppins">
            Top Placements
          </h2>
          <Marquee
            gradient={true}
            speed={60}
            pauseOnHover={true}
            gradientColor="white"
            className="overflow-hidden"
          >
            {topPlacements.map((data, id) => (
              <div
                key={id}
                className="flex-shrink-0 w-full md:w-[350px] h-auto bg-white rounded-lg shadow-xl mx-4 my-4 p-6 flex flex-col items-center justify-start transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out font-poppins"
              >
                {/* Profile Image */}
                <div className="w-24 h-24 mb-4">
                  <img
                    src={data.Profile_Url}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-full border-4 border-gray-300"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {data.name}
                </h3>

                {/* Role */}
                <div className="flex items-center text-base text-gray-600 mb-3">
                  <FaBriefcase className="text-gray-500 mr-2" />
                  <p>
                    Role:{" "}
                    <span className="font-medium text-gray-800">
                      {data.role}
                    </span>
                  </p>
                </div>

                {/* Company */}
                <div className="flex items-center text-base text-gray-600 mb-3">
                  <FaBuilding className="text-gray-500 mr-2" />
                  <p>
                    Company:{" "}
                    <span className="font-medium text-blue-500">
                      {data.company}
                    </span>
                  </p>
                </div>

                {/* Salary */}
                <div className="flex items-center text-base text-gray-600 mb-3">
                  <FaDollarSign className="text-green-500 mr-2" />
                  <p>
                    Salary:{" "}
                    <span className="font-bold text-green-500">
                      {data.salary}
                    </span>
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center text-base text-gray-600 mb-4">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <p>{data.location}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-3 text-center">
                  {data.description}
                </p>

                {/* Graduation Year */}
                <p className="text-xs text-gray-500 text-center">
                  {data.graduationYear}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* company list */}
      <section className="bg-gray-50 py-16">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-green-800 mb-4">
            Top Companies
          </h3>
          <p className="text-xl text-blue-600 mb-8">
            Discover some of the leading companies hiring top talent across the
            globe.
          </p>
        </div>
      </section>

      <section className=" py-8 w-full">
        <div className="w-full px-4">
          <Marquee
            gradient={true}
            speed={60}
            pauseOnHover={true}
            gradientColor="white"
            className="overflow-hidden"
          >
            {copmany_url.map((data, id) => (
              <div
                key={id}
                className="px-4 py-2 flex justify-center items-center"
              >
                <img
                  src={data}
                  alt={`Company ${id}`}
                  className="h-12 md:h-16 lg:h-20 object-contain transition-transform transform hover:scale-110 duration-300 ease-in-out"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
}

export default Home;
