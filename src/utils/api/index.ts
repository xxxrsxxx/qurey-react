import axios from "axios";

/**
 * @dsc setting aixos instance
 * @returns {AxiosInstance}
 */

function createInstance() {
  let headers = {};
  return axios.create({
    headers,
    timeout: 5000,
  });
}
const instance = createInstance();
/**
 * @param {String} url
 * @param {Object} data
 * @param config
 */
async function $_post(url: string, data: object, config?: object) {
  return await instance.post(url, data, config);
}

async function $_patch(url: string, data: object, config?: object) {
  return await instance.patch(url, data, config);
}
/**
 * @param {String} url
 * @param config
 */
async function $_get(url: string, config?: object) {
  const res = await instance.get(url, config);
  return res.data;
}

export { $_post, $_get,$_patch };
