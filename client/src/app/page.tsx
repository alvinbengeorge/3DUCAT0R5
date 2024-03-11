"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Orbitron, Raleway } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
});

type CarouselProp = {
  title: string;
  description: string;
  faq: { question: string; answer: string }[];
  model: string;
};

const data: CarouselProp[] = [
  {
    title: "Arduino",
    description: `Arduino UNO is a microcontroller board based on the
    ATmega328P. It has 14 digital IO pins of which 6 can be used
    for PWM output, 6 analog inputs, a 16 MHz ceramic resonator, a
    USB connection, a power jack, an ICSP header, and a reset
    button. It contains everything needed to support the
    microcontroller; simply connect it to a computer with a USB
    cable or power it with a AC-to-DC adapter or battery to get
    started.`,
    faq: [
      {
        question: "What is Arduino?",
        answer: `Arduino is an open-source electronics platform based on
        easy-to-use hardware and software. Arduino boards are able
        to read inputs - light on a sensor, a finger on a button, or
        a Twitter message - and turn it into an output - activating
        a motor, turning on an LED, publishing something online.
        You can tell your board what to do by sending a set of
        instructions to the microcontroller on the board. To do so
        you use the Arduino programming language (based on
        Wiring), and the Arduino Software (IDE), based on
        Processing.`,
      },
      {
        question: "What is the difference between Arduino and Raspberry Pi?",
        answer: `Arduino is a microcontroller board while Raspberry Pi is a
        single board computer. Arduino is used for building
        electronic projects while Raspberry Pi is used for
        building software projects.`,
      },
    ],
    model:
      "https://api.echo3d.com/webar?key=odd-poetry-3531&entry=54ff5a90-a8b5-4233-904a-bdf03d617bc3",
  },
  {
    title: "Ultrasonic sensor",
    description:
      "The ultrasonic sensor is like a tiny bat for your projects. It uses high-frequency sound waves inaudible to humans to measure distance. It sends out a pulse, listens for the echo bouncing back from an object, and calculates the time it took. The faster the echo returns, the closer the object. This lets you detect obstacles, measure liquid levels, or even map your surroundings with incredible accuracy all without ever touching a thing!",
    faq: [
      {
        question: "How does an ultrasonic sensor work?",
        answer:
          "The ultrasonic sensor uses high-frequency sound waves inaudible to humans to measure distance. It sends out a pulse, listens for the echo bouncing back from an object, and calculates the time it took. The faster the echo returns, the closer the object.",
      },
      {
        question:
          "What is the difference between an ultrasonic sensor and a PIR sensor?",
        answer:
          "An ultrasonic sensor uses sound waves to measure distance while a PIR sensor uses infrared light to detect motion.",
      },
    ],
    model:
      "https://api.echo3d.com/webar?key=fragrant-voice-1401&entry=be3f496f-6fa7-4645-9aaf-74921656e172",
  },
  {
    title: "Arduino Nano",
    description:
      "The Arduino Nano, a miniature version of the classic Uno, is a powerful option for electronics enthusiasts on the go. This tiny board (just 45mm x 18mm) packs most of the Uno's functionality, including 14 digital pins, 6 analog inputs, and a built-in ADC. Despite its size, the Nano remains breadboard-friendly for easy prototyping. It utilizes a Mini-B USB for power and programming, so keep that cable handy. With its compact size and lower cost, the Nano is perfect for space-constrained projects like wearables or embedded systems.",
    faq: [
      {
        question:
          "What are the advantages of using an Arduino Nano compared to an Arduino Uno?",
        answer:
          "The main advantage of the Arduino Nano is its size. It's significantly smaller than the Uno, making it ideal for projects with limited space, like wearable electronics or embedded systems where miniaturization is crucial. Additionally, the Nano is often slightly less expensive than the Uno, offering a cost-effective option for projects where size constraints are a major factor.",
      },
      {
        question:
          "Are there any limitations to consider when using an Arduino Nano?",
        answer:
          "While the Nano offers most of the functionality of the Uno, it does have a minor limitation. It utilizes a Mini-B USB port for power and programming, which might require a different cable than the standard USB-A connectors commonly used with the Uno.  Make sure you have the appropriate cable or adapter for your setup.",
      },
    ],
    model:
      "https://api.echo3d.com/webar?key=fragrant-voice-1401&entry=6c02f453-1274-4077-ae6f-905b71d3157e",
  },
];

const CarouselItem = ({ title, description, faq, model }: CarouselProp) => {
  return (
    <div className="carousel-item w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-0 w-full lg:p-4">
        <div className="bg-slate-300/30 backdrop-blur-xl rounded-2xl p-0 mockup-window hover:shadow-2xl hover:shadow-slate-700 duration-500 lg:p-4">
          <iframe
            src={model}
            style={{ width: "100%", height: "100%" }}
            className="rounded-xl"
          ></iframe>
        </div>
        <div className="rounded-2xl p-4 bg-slate-300/30 backdrop-blur-xl hover:shadow-2xl hover:shadow-slate-700 duration-500">
          <div className="grid place-items-center p-2 h-full">
            <div>
              <h1
                className={
                  raleway.className +
                  " text-2xl lg:text-6xl text-center bg-slate-400/30 rounded-2xl p-4 drop-shadow-lg"
                }
              >
                {title}
              </h1>
              <div className="grid grid-cols-1 gap-2 py-2">
                <p className="text-sm lg:text-lg p-4 bg-slate-400/30 rounded-2xl">
                  {description}
                </p>
                <div className="grid place-items-center gap-2">
                  {faq.map((item, index) => {
                    return (
                      <div
                        tabIndex={0}
                        key={index}
                        className="collapse collapse-arrow bg-base-200 bg-slate-400/30 border border-base-300"
                      >
                        <div className="collapse-title text-md lg:text-xl">
                          {item.question}
                        </div>
                        <div className="collapse-content">
                          <p className="text-sm lg:text-md">{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [screen, setScreen] = useState("loggedOut");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [chatButton, setChatButton] = useState("Chat");
  useEffect(() => {
    if (screen === "loggedOut") {
      setUsername("");
      setPassword("");
    }
  }, [screen]);
  useEffect(() => {
    if (username === "alvin" && password === "alvin") {
      setScreen("ar");
    }
  }, [username, password]);

  useEffect(() => {}, [message]);

  return (
    <main className="p-0 lg:p-4">
      <div className="navbar bg-base-300 shadow-slate-500 shadow-lg w-full rounded-full">
        <div className="flex-1 p-4">
          <Image src={"/Logo.svg"} alt="logo" width={160} height={160} />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="z-40">
              {screen !== "loggedOut" && (
                <details>
                  <summary>Options</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <button onClick={() => setScreen("ar")}>
                        Augmented Reality
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setScreen("community")}>
                        Community
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setScreen("wolf")}>
                        WolframAlpha
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setScreen("loggedOut")}
                        className="bg-red-600"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </details>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4">
        {screen === "loggedOut" && (
          <div className="flex flex-col items-center justify-center h-screen p-4">
            <div className="flex flex-col items-center justify-center w-96 p-4 bg-base-100 rounded-lg shadow-lg">
              <h1 className={orbitron.className + " text-4xl font-bold"}>
                Welcome
              </h1>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mt-2 bg-base-200 rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-2 bg-base-200 rounded-lg"
              />
              <p className="text-lg text-red-500">{message}</p>
              <button
                onClick={() => {
                  if (username !== "alvin" && password !== "alvin") {
                    setMessage("Invalid username or password");
                  }
                }}
                className="w-full p-2 mt-2 bg-base-200 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        )}
        {screen === "ar" && (
          <div className="grid place-items-center h-screen">
            <div className="h-full w-full">
              <div
                className={
                  " carousel carousel-center p-4 bg-[url('/background.webp')] rounded-box space-x-4 w-full"
                }
                style={{ width: "100%", height: "100%" }}
              >
                {data.map((item, index) => {
                  return <CarouselItem key={index} {...item} />;
                })}
              </div>
            </div>
          </div>
        )}
        {screen === "community" && (
          <div className="h-screen p-2 lg:p-4">
            <h1 className="text-center text-2xl lg:text-6xl">Community</h1>
            <div></div>
          </div>
        )}
        {screen === "wolf" && (
          <div className="h-screen p-2 lg:p-4">
            <h1 className="text-center text-2xl lg:text-6xl">WolframAlpha</h1>
            <div></div>
          </div>
        )}
        {screen === "chatbot" && (
          <div className="grid place-items-center h-screen">
            <div>
              <h1 className="text-6xl text-center">ChatBot</h1>
            </div>
          </div>
        )}
        {screen !== "loggedOut" && (
          <button
            className={
              orbitron.className +
              " sticky border p-4 bottom-0 right-0 rounded-full "
            }
            onClick={(e) => {
              setChatButton(chatButton == "Chat" ? "Close" : "Chat");
              setScreen(screen == "ar" ? "chatbot" : "ar");
            }}
          >
            {chatButton}
          </button>
        )}
      </div>
    </main>
  );
}
