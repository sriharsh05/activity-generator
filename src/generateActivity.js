import axios from 'axios'

function generateActivity() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  axios.get('https://www.boredapi.com/api/activity', config)
  .then((res) => {
    const activity = res.data.activity;
    document.getElementById('activity').innerHTML = activity;
  })
  .catch((error) => {
    console.error('Error fetching activity:', error);
  });
}

export default generateActivity
