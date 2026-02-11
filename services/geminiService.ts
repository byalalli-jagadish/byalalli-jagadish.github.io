
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { PERSONAL_INFO, SKILL_CATEGORIES, RADAR_SKILLS } from "../constants";

// Always use the named parameter for apiKey and strictly rely on process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const scrollToSectionTool: FunctionDeclaration = {
  name: "scrollToSection",
  description: "Smoothly scrolls the portfolio webpage to a specific section to show information to the user.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      sectionId: {
        type: Type.STRING,
        description: "The ID of the section to scroll to. Valid options: 'about', 'projects', 'experience', 'skills', 'contact'.",
      },
    },
    required: ["sectionId"],
  },
};

const skillList = SKILL_CATEGORIES.map(c => `${c.title}: ${c.skills.join(', ')}`).join('; ');

const systemInstruction = `
You are "Jagadish's Digital Concierge", a high-end AI assistant for ${PERSONAL_INFO.name}'s professional portfolio. 
Your tone is professional, sophisticated, yet warm and helpful.

Core Directive:
- Help recruiters and potential clients understand ${PERSONAL_INFO.name}'s value.
- If a user asks to see specific things (like projects, contact info, or skills), use the 'scrollToSection' tool to navigate them there.
- Keep responses concise (under 80 words) and high-impact.

Full Technical Stack:
${skillList}

Context about ${PERSONAL_INFO.name}:
- Role: ${PERSONAL_INFO.role} based in ${PERSONAL_INFO.location}.
- Expertise Summary: High competency in ${RADAR_SKILLS.map(s => s.subject).join(', ')}.
- Notable Success: Architected high-performance APIs for global automotive giants (BMW, Honda, VW).
- Key Achievement: 5x performance gain using caching strategies and automated 90% of business processes at MediBuddy.
- Portfolio Sections: 'about' (bio/socials), 'projects', 'experience', 'skills' (detailed tech stack), 'contact'.

If asked about something not in this context, politely guide them back to Jagadish's career or offer to have them send a message via the contact form.
`;

export const getGeminiChatResponse = async (userMessage: string, history: any[] = []) => {
  try {
    // Create chat using gemini-3-flash-preview as recommended for basic text and Q&A tasks.
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction,
        tools: [{ functionDeclarations: [scrollToSectionTool] }],
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: userMessage });
    
    // Access result.text and result.functionCalls as properties.
    return {
      text: result.text || "",
      functionCalls: result.functionCalls || [],
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      text: "I'm having a brief moment of reflection. Feel free to explore the sections or try asking again in a few seconds!",
      functionCalls: [],
    };
  }
};
