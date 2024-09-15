import React from 'react';
import { useDispatch } from 'react-redux';
import { applyForJob } from './jobSlice';
import { toast } from 'react-toastify';

const ApplyJob = ({ jobId }) => {
  const dispatch = useDispatch();

  const handleApply = async () => {
    try {
      await dispatch(applyForJob({ job: jobId })).unwrap();
      toast.success('Successfully applied for the job!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button onClick={handleApply} className="btn">
      Apply for this Job
    </button>
  );
};

export default ApplyJob;
