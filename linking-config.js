const linking_config = {
  screens: {
    NavigationBar: {
      path: "nav",
      screens: {
        Home: "home",
        Class: {
          path: "class/:jcode",
          parse: {
            jcode: (jcode) => `${jcode}`
          },
        },
      },
    },
  },
};
export default linking_config;
