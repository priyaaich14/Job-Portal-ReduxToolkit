import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplicants } from './jobSlice';

const Applicants = ({ jobId }) => {
  const dispatch = useDispatch();
  const { applicants, isLoading, isError, message } = useSelector(
    (state) => state.jobs
  );

  useEffect(() => {
    dispatch(fetchApplicants(jobId));
  }, [dispatch, jobId]);

  if (isLoading) {
    return <div>Loading applicants...</div>;
  }

  if (isError) {
    return <div>{message}</div>;
  }

  return (
    <div>
      <h2>Applicants</h2>
      <ul>
        {applicants.map((applicant) => (
          <li key={applicant._id}>
            {applicant.name} ({applicant.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applicants;
