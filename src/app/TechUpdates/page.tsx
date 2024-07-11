'use client'

import React, { useState, useEffect } from 'react';
import Papa, { UnparseConfig } from 'papaparse';
import { Skeleton } from "@/components/ui/skeleton"
import FeaturedBlog from '@/components/components/Feature';

// Sample data for the CSV file
const sampleData = [
  { name: 'John Doe', age: 35, email: 'john.doe@example.com' },
  { name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', age: 42, email: 'bob.johnson@example.com' },
  { name: 'Sarah Lee', age: 31, email: 'sarah.lee@example.com' },
  { name: 'Tom Wilson', age: 25, email: 'tom.wilson@example.com' },
];

interface CustomUnparseConfig extends Omit<UnparseConfig, 'fields'> {
  fields?: string[];
}

const Page = () => {
  const [csvData, setCsvData] = useState('');
  const [parsedData, setParsedData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateCSV = () => {
    setIsLoading(true);
    const config: CustomUnparseConfig = {
      fields: ['name', 'age', 'email'],
      header: true,
    };
    const csvString = Papa.unparse(sampleData, config);
    setCsvData(csvString);

    const parsed = Papa.parse(csvString, { header: true });
    setParsedData(parsed.data);
    setIsLoading(false);
  };


  const downloadCSV = () => {
    const element = document.createElement('a');
    const file = new Blob([csvData], { type: 'text/csv' });
    element.href = URL.createObjectURL(file);
    element.download = 'sample.csv';
    document.body.appendChild(element);
    element.click();
  };

  const handleContextMenu = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  const handleScreenshot = (e: { ctrlKey: any; metaKey: any; key: string; preventDefault: () => void; }) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'PrintScreen' || e.key === 's')) {
      e.preventDefault();
      // You can also show a warning message or perform other actions
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleScreenshot);
    return () => {
      document.removeEventListener('keydown', handleScreenshot);
    };
  }, []);

  const Watermark = () => (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center text-white text-4xl font-bold no-select">
      The European Engineers
    </div>
  );

  const renderTable = () => {
    if (isLoading) {
      return (
        <div className="w-full relative px-20" onContextMenu={handleContextMenu}>
          <Skeleton className="w-[100px] h-[20px] rounded-full mb-4" />
          <table className="w-full bg-white border border-gray-300 mt-4">
            <thead className='px-100 opacity-40'>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left no-select">
                  <Skeleton className="w-[80px] h-[16px] rounded-full" />
                </th>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left no-select">
                  <Skeleton className="w-[80px] h-[16px] rounded-full" />
                </th>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left no-select">
                  <Skeleton className="w-[80px] h-[16px] rounded-full" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300 no-select">
                    <Skeleton className="w-[100px] h-[16px] rounded-full" />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 no-select">
                    <Skeleton className="w-[100px] h-[16px] rounded-full" />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 no-select">
                    <Skeleton className="w-[100px] h-[16px] rounded-full" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Watermark />
        </div>
      );
    }

    if (!parsedData.length) return null;

    const headers = Object.keys(parsedData[0]);

    return (
      <div className="w-full relative" onContextMenu={handleContextMenu}>
        <table className="w-full bg-white border border-gray-300 mt-4 table-auto">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left no-select">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parsedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="even:bg-gray-100">
                {headers.map((header, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border-b border-gray-300 no-select">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Watermark />
      </div>
    );
  };

  return (
    <div className="w-full mx-auto p-4">
     
      <h1 className="text-2xl font-bold mb-4 text-center">Tech Updates</h1>
      <button
        onClick={handleGenerateCSV}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded w-full"
      >
        Check Updates
      </button>
      {renderTable()}
      <FeaturedBlog />
    </div>
  );
};

export default Page;