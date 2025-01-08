const MyTeam = () => {
  const team = [
    {
      name: "Noorul",
      role: "CEO & Founder",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQFu6BXWqWAwpg/profile-displayphoto-shrink_800_800/B56ZREY2lrGsAo-/0/1736314154105?e=1741824000&v=beta&t=W10VU448sVjX9oq89pgA2NnjbaOoT7heDvuZHD9B3rc",
      social: {
        linkedin: "https://www.linkedin.com/in/meetnoorul/",
        github: "https://github.com/NoorulAinAga",
      },
    },
    {
      name: "Abhishek",
      role: "CTO & Co-Founder",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQHCNGzPgNONZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701595846085?e=1741824000&v=beta&t=fx52zVkFVYcuPf97ogTeDXYKvZIJGOecJTDgm4ZSMRM",
      social: {
        linkedin: "https://linkedin.com/in/abhishek-rajput-7b0937241/",
        github: "https://github.com/rajputboyars",
      },
    },
    {
      name: "Nikhil Gautam",
      role: "Devops & Co-Founder",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQGWnzn7F0Tl1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724258726260?e=1741824000&v=beta&t=bP3qfnnYTA6G17I5yOi1v0AuF3_8CGhZRXd2lGPo52k",
      social: {
        linkedin: "https://www.linkedin.com/in/nikhil-gautam-192486238/",
        github: "https://github.com/nikhilgautam12345",
      },
    },
    {
      name: "Nikhil Rakala",
      role: "CMS Architect & Co-Founder",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQEWSInBFOk_Aw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718625537281?e=1741824000&v=beta&t=uIr3JCuKT-L1bJvrLd1WQV4ySMVF4g9Mh1T7AK9_IRY",
      social: {
        linkedin: "https://www.linkedin.com/in/nikhil-rakala-b594191ab/",
        // github: "https://github.com/alicejohnson",
      },
    },
    {
      name: "Jappi Singh",
      role: "Lead Developer & Co-Founder",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQF6u5lke2u-LA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709230911839?e=1741824000&v=beta&t=e7fmZdJJtsPHCn443eQe0THWsUSM0aeb_sadY_ForR4",
      social: {
        linkedin: "https://www.linkedin.com/in/connect-jappreet-singh-arora/",
        github: "https://github.com/Jappreetsingh13",
      },
    },
  ];

  return (
    <section id="my-team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
        <p className="text-gray-600 text-center mb-12">
          Our passionate team works hard to deliver the best results for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 flex flex-col items-center shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="rounded-full overflow-hidden max-w-40">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="p-6 pb-0 flex items-center text-center flex-col">
                <h3 className="text-xl font-bold text-gray-800 text-nowrap">{member.name}</h3>
                <p className="text-gray-600 h-12">{member.role}</p>
                <div className="flex justify-end space-x-4 mt-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i className={`devicon-linkedin-plain text-xl`} aria-hidden="true"></i>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                    >
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-black transition-colors"
                    >
                      <i className={`devicon-github-original text-xl mb-4`} aria-hidden="true"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTeam;
