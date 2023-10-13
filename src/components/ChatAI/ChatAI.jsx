import { useState, useEffect } from "react";
import SubHeading from "@/components/SubHeading/SubHeading";
import OpenAI from "openai";

const ChatAI = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [userMessages, setUserMessages] = useState([]);
  const [aiMessages, setAiMessages] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState("user");

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage = { role: "user", content: inputMessage };

    // Perbarui userMessages terlebih dahulu
    setUserMessages([...userMessages, userMessage]);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const response = await openai.chat.completions.create({
      messages: [
        // Pesan sistem untuk menghindari kesalahan
        { role: "system", content: "You are a helpful assistant." },
        ...userMessages,
        userMessage,
      ],
      model: "gpt-3.5-turbo",
    });

    const aiMessage = {
      role: "Coping Mechanism AI",
      content: response.choices[0].message.content,
    };

    // Kemudian perbarui aiMessages
    setAiMessages([...aiMessages, aiMessage]);

    setCurrentUser(currentUser === "user" ? "Coping Mechanism AI" : "user");

    setInputMessage("");
  };

  useEffect(() => {
    const storedUserMessages = JSON.parse(localStorage.getItem("userMessages"));
    const storedAiMessages = JSON.parse(localStorage.getItem("aiMessages"));
    if (storedUserMessages && storedUserMessages.length > 0) {
      setUserMessages(storedUserMessages);
      setAiMessages(storedAiMessages);
      setIsDataLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      localStorage.setItem("userMessages", JSON.stringify(userMessages));
      localStorage.setItem("aiMessages", JSON.stringify(aiMessages));
    }
  }, [userMessages, aiMessages, isDataLoaded]);

  return (
    <div className="app__ChatAI">
      <div className="app__ChatAI-heading">
        <SubHeading title="Coping Mechanism AI" />
        <h1 className="headtext__cormorant">
          Tanyakan Semua Terkait Dilema Merokok Disini
        </h1>
        <p className="p__opensans">Temukan Apapun Disini</p>
      </div>

      <div className="app__ChatAI-chat">
        {userMessages.map((message, index) => (
          <div key={index} className={`chat-message p__opensans`}>
            <b>{message.role}:</b> {message.content}
          </div>
        ))}
        {aiMessages.map((message, index) => (
          <div key={index} className={`chat-message p__opensans`}>
            <b>{message.role}:</b> {message.content}
          </div>
        ))}
      </div>

      <div className="app__ChatAI-input flex__center">
        <input
          type="text"
          placeholder="Ketikkan apapun disini"
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="custom__button"
          onClick={handleSendMessage}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default ChatAI;
