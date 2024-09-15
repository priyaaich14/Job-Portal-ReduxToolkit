import React from 'react';
import JobList from '../features/jobs/JobList';

const CandidateDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Candidate Dashboard</h1>
      <JobList />
    </div>
  );
};

export default CandidateDashboard;
