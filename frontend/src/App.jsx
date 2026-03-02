import axios from "axios";
const App = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/auth/login",
        {
          email: "john.carter@example.com",
          password: "SecurePass123!",
          role: "USER",
        },
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <>
      <div className="bg-red-200">
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
};
export default App;
