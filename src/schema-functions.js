export function add(object) {
  return new Promise((resolve, reject) => {
    object.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}

export function get(Item, id) {
  return new Promise((resolve, reject) => {
    Item.findOne({ id: id }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
}