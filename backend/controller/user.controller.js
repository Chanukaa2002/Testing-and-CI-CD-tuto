// backend/controller/user.controller.js
export const getUser = (req, res) => {
  res.json({ id: 1, name: "John Doe" });
};

export const createUser = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.status(201).json({ id: 2, name });
};


