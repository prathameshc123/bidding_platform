import { useState } from "react";
import { Search, Info, AlertCircle } from "lucide-react";

const InputGroup = ({ label, value, onChange, ...props }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm"
      {...props}
    />
  </div>
);

const Chatbot = () => {
  const [item, setItem] = useState('');
  const [response, setResponse] = useState({ price: '', details: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!item.trim()) {
      setError('Please enter an item name');
      return;
    }

    setLoading(true);
    setError('');
    setResponse({ price: '', details: '' });

    try {
      const prompt = `You are a market research expert. Analyze this input: "${item.trim()}"

1. STRICTLY check if this is a person's full name (must include first and last name). 
   - If yes: Respond ONLY with "ERROR_PERSON_NAME"
   
2. If NOT a person's name:
   - Provide current market price in Indian Rupees (₹) as **Price:** [PRICE]
   - Include detailed information with:
     • Item Overview
     • Market Availability
     • Valuation Factors
     • Authenticity Check
     • Purchase Recommendations
   - Use bullet points, keep under 300 words
   - Avoid any person names in response`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDIxYLzYWYYRv_Me8ALPfxAYCo6GmU6d2I`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data?.error?.message || "API Error");

      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
      
      if (aiText === "ERROR_PERSON_NAME") {
        throw new Error("PERSON_NAME_ERROR");
      }

      const priceMatch = aiText.match(/\*\*Price:\*\* (.+)/);
      const price = priceMatch?.[1] || "Price estimate unavailable";
      const details = aiText.replace(/\*\*Price:\*\* .+?(\n|$)/, '').trim();

      const formattedDetails = details
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-blue-700">$1</strong>')
        .replace(/- /g, '• ')
        .replace(/\n/g, '<br/>');

      setResponse({ price, details: formattedDetails });
    } catch (err) {
      console.error(err);
      setError(err.message === "PERSON_NAME_ERROR" 
               ? "This appears to be a person's name. Please enter an item name."
               : "Failed to fetch item details. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center bg-blue-600 p-4 rounded-full mb-4 shadow-md">
            <Info size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-blue-800">
            Unique Item Valuation
          </h1>
          <p className="text-blue-600 mt-2">Get pricing and authentication details for rare/unique items</p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-blue-100">
          <form onSubmit={handleSearch} className="space-y-6">
            <InputGroup 
              label="Enter Unique Item Name"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              placeholder="e.g., Vintage Watch, Rare Coin, Limited Edition Artwork"
            />

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'
              }`}
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Analyzing...
                </>
              ) : (
                <>
                  <Search size={18} />
                  Get Valuation
                </>
              )}
            </button>
          </form>

          {response.price && (
            <div className="mt-8 space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">
                  Estimated Value: {response.price}
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: response.details }}
                />
              </div>
            </div>
          )}
        </div>

        <footer className="text-center text-sm text-blue-500">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-blue-100">
            Unique Item Analyzer • Authentication & Market Valuation Services
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chatbot;