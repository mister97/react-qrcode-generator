This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# QR Code Generator
This project is a React-based web application that allows users to generate customized QR codes. The QR codes can represent different types of data, such as plain text, URLs, vCards (contact information), and WiFi credentials. Additionally, users can customize the foreground and background colors of the QR codes and download them as PNG files.

## Features
1. **Real-time QR Code Generation**: The QR code updates live as you type, without needing to click a "Generate" button.
2. **Multiple QR Code Types**: Support for various types of QR codes, including:
   - Text
   - URL
   - vCard (contact information)
   - WiFi credentials
3. **Color Customization**: Users can select custom colors for the foreground and background of the QR code.
4. **Downloadable QR Codes**: Users can download the generated QR code as a PNG file.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mister97/react-qrcode-generator.git
   cd react-qrcode-generator
   ```

2. **Install Dependencies**:
  ```bash
  npm install
  ```

3. **Run the Application**:

```bash
npm start
```
The application will start and be available at http://localhost:3000.

## Usage
1. **Select QR Code Type**: Choose the type of QR code you want to generate from the dropdown menu. Options include Text, URL, vCard, and WiFi.

2. **Enter Data**:
- Text: Simply enter the text you want to encode.
- URL: Enter a valid URL.
- vCard: Fill in the fields for full name, phone number, and email address.
- WiFi: Enter the SSID and password of the WiFi network.
3. **Customise Colors**: Use the color pickers to select foreground and background colors for the QR code.
4. **View and Download**: The QR code will be displayed live as you enter data. Click the "Download QR Code" button to save the QR code as a PNG file.

## Code Overview
## App Component
The main component (src/App.js) is responsible for rendering the UI and managing the state of the application. Key parts of the component include:
- State Management: Uses useState hooks to manage the state of the QR code type, input data, and colors.
- Effect Hooks: Utilizes useEffect hooks to update the QR code whenever the relevant state changes.
- QR Code Styling: Uses the qr-code-styling library to generate QR codes with custom styles.
- Event Handlers: Handles user input and updates the QR code accordingly.

## Styles
The CSS file ```(src/App.css)``` contains styles for the application, including layout, input fields, and buttons.

## Dependencies
- React: A JavaScript library for building user interfaces.
- qr-code-styling: A library for generating styled QR codes.

## Contribution
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or create a pull request.

## License
This project is licensed under the MIT License.
