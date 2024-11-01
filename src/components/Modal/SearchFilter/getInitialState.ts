export default function initialState() {
  return {
    price: [0, 10000],
    guestCount: 1,
    amenities: {
      wifi: false,
      parking: false,
      breakfast: false,
      pet: false,
    },
    query: "",
  };
}
