const menu = require('../data/menu.json');
menu.items = menu.items.map((i, id) => ({ ...i, id }));

let id = menu.items.length;

module.exports = {
  store: async (req, res) => {
    const { item } = req.body;
    id++;
    menu.items.push({ ...item, id });

    return res.status(200).send({ item });
  },
  index: async (req, res) => {
    return res.status(200).send({ items: menu.items });
  },
  delete: async (req, res) => {
    const { id: itemId } = req.params;
    menu.items = menu.items.filter((_, id) => id !== parseInt(itemId));
    
    return res.status(200).send({ items: menu.items });
  },
}