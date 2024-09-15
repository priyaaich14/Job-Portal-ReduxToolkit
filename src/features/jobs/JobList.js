import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './jobSlice';
import ApplyJob from './ApplyJob';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, isError, message } = useSelector((state) => state.jobs);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading jobs...</div>;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Job Listings</h2>
      <ul className="mt-4">
        {jobs.map((job) => (
          <li key={job._id} className="border p-4 mb-2">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p>{job.description}</p>
            <p>Company: {job.company}</p>
            <p>Posted by: {job.recruiter.name}</p>

            {user && user.role === 'candidate' && (
              <ApplyJob jobId={job._id} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
