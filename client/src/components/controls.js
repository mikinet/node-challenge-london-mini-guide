export const select = {
  id: "cities",
  options: [
    { value: "", text: "Select a city..." },
    { value: "Harrow", text: "Harrow" },
    { value: "Heathrow", text: "Heathrow" },
    { value: "Startford", text: "Stratford" },
  ],
};

export const label = { for: "cities", text: "City:" };

export const buttons = [
  { id: "pharmacies", caption: "Pharmacies" },
  { id: "colleges", caption: "Schools and Colleges" },
  { id: "hospitals", caption: "Hospitals" },
  { id: "doctors", caption: "Doctors" },
];
