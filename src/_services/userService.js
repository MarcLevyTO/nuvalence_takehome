import axios from "axios";

// @route     GET /profile
// @desc      Fetch user's profile
// @access    User
// @params
const loadUsers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=100");
    return response.data.results.sort((a,b) => (a.name['first'] > b.name['first']) ? 1 : ((b.name['first'] > a.name['first']) ? -1 : 0));
  }
  catch (error) {
    let errorMessage = error.response.data.error;
    throw new Error(errorMessage);
  }
}

export const userService = {
  loadUsers
};