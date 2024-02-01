export const getCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  });

  return currentDate;
};
