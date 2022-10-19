const linking_config = {
  screens: {
    NavigationBar: {
      path: "nav",
      screens: {
        Home: "home",
        Class: {
          path: 'class/:jcode',
          parse: {
            jcode : String
          }
        },
      },
    },
  },
};


export default linking_config;
