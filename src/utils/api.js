export async function fetchDestinations() {
  return [
    {
      id: 101,
      type: "destination",
      title: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      location: "France",
      description: "City of lights and romance.",
    },
    {
      id: 102,
      type: "destination",
      title: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      location: "UAE",
      description: "Luxury and skyscrapers.",
    },

    {
      id: 1,
      type: "hotel",
      title: "Paris Luxury Hotel",
      price: 120,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      location: "Paris, France",
      description: "Luxury stay in Paris.",
    },
    {
      id: 2,
      type: "hotel",
      title: "Dubai Grand Resort",
      price: 200,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      location: "Dubai, UAE",
      description: "Premium resort experience.",
    },

    {
      id: 3,
      type: "flight",
      title: "Delhi → Dubai",
      price: 450,
      image: "https://images.unsplash.com/photo-1504198458649-3128b932f49b",
      location: "Indigo Airlines",
      description: "Direct flight.",
    },
  ];
}