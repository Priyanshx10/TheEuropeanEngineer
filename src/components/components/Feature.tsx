import React from 'react';

const FeaturedBlog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Explore the latest trends and technologies shaping the future of web development.',
      authorName: 'John Doe',
    },
    {
      id: 2,
      title: 'Mastering React Hooks',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Learn how to leverage the power of React Hooks to build more efficient and maintainable applications.',
      authorName: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Serverless Architecture: Benefits and Challenges',
      image: 'https://via.placeholder.com/300x200',
      excerpt:
        'Discover the advantages and potential pitfalls of adopting a serverless architecture for your projects.',
      authorName: 'Bob Johnson',
    },
    // Add more featured blog posts as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Featured Blog</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40x40"
                  alt={post.authorName}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-gray-600">{post.authorName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;