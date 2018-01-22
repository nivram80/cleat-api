export function add(object) {
  return new Promise((resolve, reject) => {
    object.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}

export function get(Item, id) {
  return new Promise((resolve, reject) => {

    if (id) {
      Item.findOne({ id: id }).exec((err, res) => {
        err ? reject(err) : resolve(res);
      })
    } else {
      Item.find({}).exec((err, res) => {
        err ? reject(err) : resolve(res);
      })
    }

  });
}

export function remove(Item, id) {
  return new Promise((resolve, reject) => {
    Item.findOneAndRemove({ id: id }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
}