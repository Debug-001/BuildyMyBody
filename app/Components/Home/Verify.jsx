import {useState} from 'react';
// import article1 from '../../img/article-1.png';

const Verify = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({code}),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage('Code not found.');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      setMessage('Error verifying code.');
    }
  };

  return (
    <>
      <section id="verify">
        <div className="container pt-5 pb-5">
          <div
            className="d-flex justify-content-center"
            style={{flexDirection: 'column', alignItems: 'center'}}
          >
            <h1
              className="custom-heading3 text-center"
              style={{color: '#ff2828', fontWeight: '900'}}
            >
              <em>Verify Your Products</em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter 14-digit code"
              />
              <button type="submit">Verify</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
