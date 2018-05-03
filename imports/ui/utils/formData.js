const formData = event => Object.values(event.target).reduce((acc, current) => {
  const key = current.name;
  if (key) {
    return {
      ...acc,
      [key]: current.value
    };
  }
  return acc;
}, {});

export default formData;