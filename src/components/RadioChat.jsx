import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { genAIClient, IZZUDDIN_SYSTEM_INSTRUCTION } from '../utils/gemini';
import './RadioChat.css';

export default function RadioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: '*STATIC NOISE*... This is automated COMM system... Ready for inquiry regarding Subject Izzuddin. Over.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [interactionId, setInteractionId] = useState(null);
  const chatHistoryRef = useRef(null);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    if (!genAIClient) {
      setMessages(prev => [...prev, { role: 'ai', text: 'ERROR: COMM LINK SEVERED. MISSING API KEY.' }]);
      setIsLoading(false);
      return;
    }

    try {
      setMessages(prev => [...prev, { role: 'ai', text: '' }]);
      
      const stream = await genAIClient.interactions.create({
        model: "gemini-3.6-flash",
        input: userMsg,
        system_instruction: IZZUDDIN_SYSTEM_INSTRUCTION,
        previous_interaction_id: interactionId || undefined,
        stream: true
      });

      let currentText = "";

      for await (const event of stream) {
        if (event.event_type === "step.delta" && event.delta.type === "text") {
          currentText += event.delta.text;
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1].text = currentText;
            return newMsgs;
          });
        } else if (event.event_type === "interaction.completed") {
          setInteractionId(event.interaction.id);
        }
      }
    } catch (error) {
      console.error("Gemini API Error details:", error);
      
      // Try to extract more details if available
      let errorDetails = error.message;
      if (error.status) errorDetails += ` | Status: ${error.status}`;
      if (error.errorDetails) errorDetails += ` | Details: ${JSON.stringify(error.errorDetails)}`;
      
      setMessages(prev => [...prev, { role: 'ai', text: `ERROR: SIGNAL LOST. FAILED TO REACH SERVER. [DIAGNOSTIC: ${errorDetails}]` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  const SUGGESTIONS = [
    "Who is Izzuddin?",
    "What are his skills?",
    "Tell me about his experience"
  ];

  return (
    <div className="radio-chat-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="radio-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="radio-header">
              <span>COMM LINK: SECURE</span>
              <div className="signal-strength">
                <span className="signal-bar"></span>
                <span className="signal-bar"></span>
                <span className="signal-bar blinking"></span>
              </div>
            </div>

            <div className="chat-history" ref={chatHistoryRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.role}`}>
                  <div className="message-sender">{msg.role === 'ai' ? 'COMM-AI:' : 'YOU:'}</div>
                  <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                </div>
              ))}
              {isLoading && (
                <div className="typing-indicator">
                  Receiving transmission <span></span><span></span><span></span>
                </div>
              )}
            </div>

            <div className="suggestions-container">
              {SUGGESTIONS.map((sug, i) => (
                <button 
                  key={i} 
                  className="suggestion-btn" 
                  onClick={() => handleSuggestionClick(sug)}
                >
                  {sug}
                </button>
              ))}
            </div>

            <form className="radio-input-area" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Transmit message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || !input.trim()}>
                SEND
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        className="radio-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '[ CLOSE COMM ]' : '[ OPEN COMM ]'}
      </button>
    </div>
  );
}
