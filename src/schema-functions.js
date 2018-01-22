export function add(object) {
  return new Promise((resolve, reject) => {
    object.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}