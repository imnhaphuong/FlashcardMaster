const linking_config = {
      screens: {
        sign_in: {
          path: 'signin'
        },
        sign_up: {
          path: 'signup'
        },
        class: {
          path: 'class/:jcode',
          parse: {
            jcode : (jcode)=>`${jcode}`
          }
        },
      },
};


export default linking_config;
