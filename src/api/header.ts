const headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("ndmToken")}`,
  },
};

export default headers;
