import { notification } from "antd";

export default (error: Error) => {
  notification.error({
    key: 1,
    message: error.message,
    placement: "bottomLeft",
  });
};
