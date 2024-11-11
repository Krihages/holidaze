import getRequest from "./get";
import postRequest from "./post";
import deleteRequest from "./delete";
import putRequest from "./put";

const request = {
  get: getRequest,
  post: postRequest,
  delete: deleteRequest,
  put: putRequest,
};

export default request;
