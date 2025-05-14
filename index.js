function createLoginTracker(userInfo) {
  let attemptCount = 0; 

  const attemptLogin = (passwordAttempt) => {
    attemptCount++; 

    
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    
    if (passwordAttempt === userInfo.password) {
      return "Login successful"; 
    } else {
      return `Attempt ${attemptCount}: Login failed`; 
    }
  };

  return attemptLogin; 
}

const userInfo = {
  username: "user1",
  password: "password123"
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};