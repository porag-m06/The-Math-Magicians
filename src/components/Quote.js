import { useEffect, useState } from 'react';
import '../style/Quote.css';

export default function Quote() {
  const [quote, setQuote] = useState('loading...');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers',
        {
          headers: {
            'X-Api-Key': '/YeVAlnqFdBB70E8aGovGA==fjN5mk2cXRLs5vHK',
          },
        });
      const json = await res.json();
      setQuote(`"${json[0].quote}" ---- by "${json[0].author}"`);
    } catch (e) {
      if (loading || error) {
        setError(true);
        setQuote('Error fetching quote! Please reload!!');
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [setError]);

  return (
    <div className="quote">
      <h2>{quote}</h2>
    </div>
  );
}
