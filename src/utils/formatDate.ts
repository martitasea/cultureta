export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleDateString('es-ES', { month: 'long' }); // Mes en español
  //const time = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)}`;
};