const linking_config = {
  screens: {
    NavigationBar: {
      path: "nav",
      screens: {
        Class: {
          path: 'home/:jcode?',
          parse: {
            jcode : String
          }
        },
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
