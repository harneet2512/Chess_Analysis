import axios from 'axios';
import { useReducer, useEffect } from 'react';

const initialHookData = {
  position: [[]],
  turn: 'w',
  candidateMoves: [],
  movesList: [],
  promotionSquare: null,
  status: 'Ongoing',
  castleDirection: {
    b: 'both',
    w: 'both',
  },
  newEntry: '',
};

const YourComponent = () => {
  const [hookData, dispatch] = useReducer(reducer, initialHookData);

  const fetchCSRFToken = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get-csrf-token/');
      return response.data.csrfToken;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
      return null;
    }
  };

  const sendDataToBackend = async () => {
    try {
      const csrfToken = await fetchCSRFToken();
      if (!csrfToken) return; // Stop if CSRF token fetch failed

      const config = {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        'http://127.0.0.1:8000/api/hook-data',
        hookData,
        config
      );

      console.log('Data sent to backend:', response.data); // Access response.data for actual data

      // Handle the response from the backend if needed
      // For example, update state or perform additional actions based on the response
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle errors if any
    }
  };

  useEffect(() => {
    sendDataToBackend();
  }, [hookData]);

  return null;
};

export default YourComponent;
