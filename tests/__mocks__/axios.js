export default {
  get: jest.fn().mockImplementation((url) => {
    switch (url) {
      case "https://randomuser.me/api/?results=100":
        return Promise.resolve({
          data: [
            { 
              "gender": "male",
              "name": {
                "title": "Mr",
                "first": "Fake",
                "last": "Male"
              },
              "email": "fake.make@gmail.com",
            },
            { 
              "gender": "female",
              "name": {
                "title": "Ms",
                "first": "Unreal",
                "last": "Female"
              },
              "email": "unreal.femail@gmail.com",
            }
          ],
        });
      default:
        return Promise.resolve({ status: 200, data: {} });
    }
  }),
};
