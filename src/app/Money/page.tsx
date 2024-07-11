import React from 'react';

const MoneyPage = () => {
  const moneyArticles = [
    {
      id: 1,
      title: 'How to Invest in the Stock Market',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Discover the basics of investing in the stock market and how to get started.',
      authorName: 'John Doe',
    },
    {
      id: 2,
      title: 'Personal Finance Tips for Tech Professionals',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Learn how to manage your finances effectively as a tech professional.',
      authorName: 'Jane Smith',
    },
    {
      id: 3,
      title: 'The Benefits of Budgeting',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Explore the advantages of creating a budget and how to stick to it.',
      authorName: 'Bob Johnson',
    },
    {
      id: 4,
      title: 'Retirement Planning for Tech Enthusiasts',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Discover strategies to plan for a comfortable retirement as a tech professional.',
      authorName: 'Sarah Lee',
    },
    {
      id: 5,
      title: 'Maximizing Tax Deductions for Tech Entrepreneurs',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Learn about the tax deductions and strategies available for tech entrepreneurs.',
      authorName: 'Tom Wilson',
    },
    {
      id: 6,
      title: 'Cryptocurrency Investing: Risks and Opportunities',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Explore the potential risks and opportunities of investing in cryptocurrencies.',
      authorName: 'Emma Davis',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Money and Finance</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {moneyArticles.map((article) => (
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

export default MoneyPage;