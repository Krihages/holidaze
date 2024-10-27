import getRequest from "./get";
import postRequest from "./post";
import deleteRequest from "./delete";

const request = {
  get: getRequest,
  post: postRequest,
  delete: deleteRequest,
};

export default request;
