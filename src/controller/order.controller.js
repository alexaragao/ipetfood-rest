let orders = [];

module.exports = {
  index: async (req, res) => {
    return res.status(200).send ({ orders });
  },
  store: async (req, res) => {
    const { order } = req.body;
    orders.push(order);

    return res.status(201).send ({ order });
  }
}