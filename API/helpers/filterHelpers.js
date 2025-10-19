exports.parseFilters = (filtersHeader) => {
  // Expecting filtersHeader as JSON stringified array like [{field, op, value}]
  if (!filtersHeader) return { filter: {} };
  try {
    const arr = JSON.parse(filtersHeader);
    const filter = {};
    arr.forEach(f => {
      const { field, op, value } = f;
      if (!field) return;
      switch (op) {
        case 'eq':
          filter[field] = value; break;
        case 'in':
          filter[field] = { $in: value }; break;
        case 'regex':
          filter[field] = { $regex: value, $options: 'i' }; break;
        default:
          filter[field] = value;
      }
    });
    return { filter };
  } catch (err) {
    return { filter: {} };
  }
};
