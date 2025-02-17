export default {   
    testEnvironment: "jsdom", 
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest" 
    },
    transformIgnorePatterns: ["/node_modules/(?!(@babel/runtime))"],
};