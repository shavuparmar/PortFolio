const certificates = Array.from({ length: 14 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    id: i + 1,
    title: `Certificate ${num}`,
    issuer: "Development & Design",
    image: `/certificates/Certificate${num}.webp`,
    pdf: `/Certificate${num}.pdf`
  };
});

export default certificates;
