import React from 'react';

const JobsPage = () => {
  const jobArticles = [
    {
      id: 1,
      title: 'How to Ace Your Next Tech Interview',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Discover the top strategies and techniques to prepare for and excel in your next tech job interview.',
      authorName: 'John Doe',
    },
    {
      id: 2,
      title: 'The Rise of Remote Work in Europe',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Explore the growing trend of remote work opportunities in Europe and how to leverage them for your career.',
      authorName: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Negotiating Salaries as a Tech Professional',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Learn effective strategies to negotiate higher salaries and better benefits in the European tech market.',
      authorName: 'Bob Johnson',
    },
    {
      id: 4,
      title: 'Building a Strong Professional Network',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Discover the importance of networking and practical tips to expand your professional connections in the tech industry.',
      authorName: 'Sarah Lee',
    },
    {
      id: 5,
      title: 'Transitioning to a Tech Career from a Non-Tech Background',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Learn how to successfully transition into a tech career if you come from a non-technical background.',
      authorName: 'Tom Wilson',
    },
    {
      id: 6,
      title: 'Navigating Job Searches in the European Tech Market',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Explore effective strategies and resources to navigate job searches in the diverse European tech market.',
      authorName: 'Emma Davis',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Jobs and Careers</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40x40"
                  alt={article.authorName}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-gray-600">{article.authorName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;