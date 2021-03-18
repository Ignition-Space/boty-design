import invariant from 'invariant';

let inTransaction = false;
let taskQueue = [];
export const startTransaction = () => {
  inTransaction = true;
};

export const enqueueTask = (cb) => {
  taskQueue.push(cb);
};

export const commitTransaction = () => {
  invariant(
    inTransaction === true,
    'cant commit since not currently in transaction.'
  );

  while (taskQueue.length > 0) {
    const task = taskQueue.pop();
    task();
  }

  inTransaction = false;
};
