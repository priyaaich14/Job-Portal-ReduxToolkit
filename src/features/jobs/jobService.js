import axios from 'axios';

const API_URL = '/api/jobs/';

const getJobs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getApplicants = async (jobId) => {
  const response = await axios.get(`${API_URL}${jobId}/applicants`);
  return response.data;
};

const applyForJob = async (jobData) => {
  const response = await axios.post('/api/applications', jobData);
  return response.data;
};

const jobService = {
  getJobs,
  getApplicants,
  applyForJob,
};

export default jobService;
