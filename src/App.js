import React, { useState, useRef, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import "./App.css";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  dotsOptions: {
    color: "#000000", // Default foreground color
    type: "rounded",
  },
  backgroundOptions: {
    color: "#ffffff", // Default background color
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

function App() {
  const [qrType, setQrType] = useState("text");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [vcard, setVcard] = useState({ name: "", phone: "", email: "" });
  const [wifi, setWifi] = useState({ ssid: "", password: "" });
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const qrCodeRef = useRef(null);

  useEffect(() => {
    qrCode.append(qrCodeRef.current);
    generateQRCode();
  }, []);

  useEffect(() => {
    generateQRCode();
  }, [qrType, text, url, vcard, wifi, foregroundColor, backgroundColor]);

  const handleTypeChange = (event) => {
    setQrType(event.target.value);
    setText("");
    setUrl("");
    setVcard({ name: "", phone: "", email: "" });
    setWifi({ ssid: "", password: "" });
  };

  const handleVcardChange = (event) => {
    const { name, value } = event.target;
    setVcard((prevVcard) => ({ ...prevVcard, [name]: value }));
  };

  const handleWifiChange = (event) => {
    const { name, value } = event.target;
    setWifi((prevWifi) => ({ ...prevWifi, [name]: value }));
  };

  const generateQRCode = () => {
    let qrData = "";
    switch (qrType) {
      case "url":
        qrData = url;
        break;
      case "vcard":
        qrData = `BEGIN:VCARD\nVERSION:3.0\nFN:${vcard.name}\nTEL:${vcard.phone}\nEMAIL:${vcard.email}\nEND:VCARD`;
        break;
      case "wifi":
        const { ssid, password } = wifi;
        qrData = `WIFI:T:WPA;S:${ssid};P:${password};;`;
        break;
      default:
        qrData = text;
    }
    qrCode.update({
      data: qrData,
      dotsOptions: { color: foregroundColor },
      backgroundOptions: { color: backgroundColor },
    });
  };

  const downloadQRCode = () => {
    qrCode.download({ extension: "png" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code Generator</h1>
        <div>
          <label>
            Select QR Code Type:
            <select value={qrType} onChange={handleTypeChange}>
              <option value="text">Text</option>
              <option value="url">URL</option>
              <option value="vcard">vCard</option>
              <option value="wifi">WiFi</option>
            </select>
          </label>
        </div>

        {qrType === "text" && (
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input-box"
          />
        )}

        {qrType === "url" && (
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input-box"
          />
        )}

        {qrType === "vcard" && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={vcard.name}
              onChange={handleVcardChange}
              className="input-box"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={vcard.phone}
              onChange={handleVcardChange}
              className="input-box"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={vcard.email}
              onChange={handleVcardChange}
              className="input-box"
            />
          </div>
        )}

        {qrType === "wifi" && (
          <div>
            <input
              type="text"
              name="ssid"
              placeholder="WiFi SSID"
              value={wifi.ssid}
              onChange={handleWifiChange}
              className="input-box"
            />
            <input
              type="password"
              name="password"
              placeholder="WiFi Password"
              value={wifi.password}
              onChange={handleWifiChange}
              className="input-box"
            />
          </div>
        )}

        <div>
          <label>
            Foreground Color:
            <input
              type="color"
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Background Color:
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </label>
        </div>

        <div className="qr-code" ref={qrCodeRef} />
        <button onClick={downloadQRCode} className="download-btn">
          Download QR Code
        </button>
      </header>
    </div>
  );
}

export default App;
