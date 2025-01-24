import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Lead Developer',
      description: '10+ years of experience in software development and team leadership',
      socialLinks: [
        { platform: 'linkedin', url: '#' },
        { platform: 'twitter', url: '#' }
      ]
    },
    {
      name: 'Sarah Johnson',
      role: 'Frontend Lead',
      description: 'Expert in creating responsive and intuitive user interfaces',
      socialLinks: [
        { platform: 'linkedin', url: '#' }
      ]
    },
    {
      name: 'Michael Chen',
      role: 'Backend Lead',
      description: 'Specialized in scalable architecture and cloud solutions',
      socialLinks: [
        { platform: 'linkedin', url: '#' }
      ]
    },
    {
      name: 'Emma Wilson',
      role: 'UX/UI Designer',
      description: 'Creating beautiful and user-friendly digital experiences',
      socialLinks: [
        { platform: 'linkedin', url: '#' }
      ]
    }
  ];

  const renderSocialIcon = (platform) => {
    const icons = {
      linkedin: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
      twitter: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
    };
    return icons[platform];
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented professionals bring years of experience and expertise to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="group relative animate__animated animate__fadeInUp"
              style={{ animationDelay: index > 0 ? `${index * 0.2}s` : undefined }}
            >
              <div className="bg-neutral-100 rounded-xl p-6 text-center hover:bg-neutral-200 transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-neutral-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  {member.socialLinks.map(social => (
                    <a 
                      key={social.platform}
                      href={social.url} 
                      className="text-neutral-600 hover:text-blue-600"
                    >
                      {renderSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <p className="text-gray-600 mb-8">Want to join our team? We're always looking for talented individuals!</p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;