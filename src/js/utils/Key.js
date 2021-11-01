// export v4 renamed uuidv4
import { v4 as uuidv4 } from "uuid";

const keyGenerator = function (data) {
  const keyedData = data.map((item) => {
    item.id = uuidv4().substr(0, 8);
    return item;
  });

  return keyedData;
};

export default keyGenerator;
