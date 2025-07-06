import React, { useState } from "react";

interface SuggestionForm {
  name: string;
  address: string;
  city: string;
  description: string;
}

const SuggestPlace: React.FC = () => {
  const [formData, setFormData] = useState<SuggestionForm>({
    name: "",
    address: "",
    city: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Suggested Place Data:", formData);
    setFormData({
      name: "",
      address: "",
      city: "",
      description: "",
    });
  };

  return (
    <div className="center justify-center min-h-screen bg-white mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-300 rounded-2xl shadow-lg px-8 py-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-8">Suggest a Place</h1>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Cafe Central"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Address</label>
          <input
            type="text"
            name="address"
            placeholder="123 Main St"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">City</label>
          <input
            type="text"
            name="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Why is this a good place to work?"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 resize-none focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SuggestPlace;
