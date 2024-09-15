import React from 'react';
import { useSelector } from 'react-redux';
import JobList from '../features/jobs/JobList';
import Applicants from '../features/jobs/Applicants';

const RecruiterDashboard = () => {
  const { jobs } = useSelector((state) => state.jobs);

  return (
    <div>
      <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
      <JobList />
      {jobs.map((job) => (
        <div key={job._id}>
          <h2>{job.title}</h2>
          <Applicants jobId={job._id} />
        </div>
      ))}
    </div>
  );
};

export default RecruiterDashboard;
