# Node.js Programs Collection

A comprehensive collection of Node.js programs demonstrating various concepts and functionality, displayed in a beautiful HTML interface with ESLint integration for code quality.

## 📁 Project Structure

```
NODE JS/
├── programs_display.html    # Main HTML display file
├── .eslintrc.json          # ESLint configuration
├── package.json            # Project dependencies
├── README.md              # This file
├── calculator.js          # Calculator module
├── program_1.js          # HTTP Server File Commenter
├── program_2.js          # Multiplication Table Generator
├── program_3.js          # Calculator Interface
├── program_4.js          # File Writer & Reader
├── program_5.js          # Array Operations
├── program_6.js          # String Manipulation
├── program_7.js          # Object Operations
├── program_8.js          # Async Operations
├── program_9.js          # Event Handling
├── program_10.js         # File System Operations
├── program_11.js         # HTTP Client
├── program_12.js         # Data Structures
├── program_13.js         # Algorithms
├── program_14.js         # Regular Expressions
└── program_15.js         # Module System
```

## 🎨 HTML Display Features

The `programs_display.html` file provides:

- **Modern, Responsive Design**: Beautiful gradient backgrounds and card-based layout
- **Search Functionality**: Search through programs by name, description, or features
- **Interactive Cards**: Hover effects and smooth animations
- **Comprehensive Information**: Each program shows:
  - Description and purpose
  - Key features and capabilities
  - Example outputs
  - File name and status
- **Mobile-Friendly**: Responsive design that works on all devices

### How to Use the HTML Display

1. **Open the file**: Double-click `programs_display.html` or open it in any web browser
2. **Search programs**: Use the search bar at the top to filter programs
3. **Browse programs**: Scroll through the cards to view all programs
4. **View details**: Each card shows comprehensive information about the program

## 🔍 ESLint Integration

ESLint is configured to help identify and fix code quality issues in your JavaScript files.

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run ESLint**:
   ```bash
   # Check for issues
   npm run lint
   
   # Fix automatically fixable issues
   npm run lint:fix
   ```

### ESLint Rules

The configuration includes rules for:

- **Code Style**: Indentation, quotes, semicolons, spacing
- **Best Practices**: No unused variables, prefer const, no var
- **Error Prevention**: No undefined variables, no unreachable code
- **Node.js Specific**: Proper globals for Node.js environment

### Common Issues and Fixes

1. **Indentation**: Use 2 spaces for indentation
2. **Quotes**: Use single quotes for strings
3. **Semicolons**: Always use semicolons at the end of statements
4. **Spacing**: Proper spacing around operators and brackets
5. **Variables**: Use `const` and `let` instead of `var`

## 🚀 Running Programs

### Individual Programs

Each program can be run individually:

```bash
# Run a specific program
node program_1.js
node calculator.js
node program_3.js
```

### Program Categories

1. **HTTP Servers**: `program_1.js` - File commenter server
2. **User Input**: `program_2.js`, `program_3.js`, `program_4.js` - Interactive programs
3. **Data Processing**: `program_5.js`, `program_6.js`, `program_7.js` - Array, string, object operations
4. **Advanced Concepts**: `program_8.js` - `program_15.js` - Async, events, file system, etc.

## 📊 Program Overview

| Program | Purpose | Key Features |
|---------|---------|--------------|
| `program_1.js` | HTTP Server | File reading, commenting, error handling |
| `program_2.js` | Multiplication Table | User input, loops, formatting |
| `calculator.js` | Math Module | Basic arithmetic, error handling |
| `program_3.js` | Calculator Interface | User interaction, module usage |
| `program_4.js` | File Operations | File I/O, user input, error handling |
| `program_5.js` | Array Operations | Filtering, mapping, reducing |
| `program_6.js` | String Manipulation | Case conversion, reversal, counting |
| `program_7.js` | Object Operations | Property access, JSON, iteration |
| `program_8.js` | Async Operations | Promises, async/await, callbacks |
| `program_9.js` | Event Handling | Custom events, emitters, listeners |
| `program_10.js` | File System | Reading, writing, directory operations |
| `program_11.js` | HTTP Client | GET requests, response handling |
| `program_12.js` | Data Structures | Stacks, queues, linked lists |
| `program_13.js` | Algorithms | Sorting, searching, mathematical |
| `program_14.js` | Regular Expressions | Pattern matching, validation |
| `program_15.js` | Module System | Exports, imports, module creation |

## 🛠️ Development

### Adding New Programs

1. Create a new JavaScript file (e.g., `program_16.js`)
2. Add comprehensive JSDoc comments
3. Include error handling
4. Test the program
5. Update the HTML display if needed
6. Run ESLint to ensure code quality

### Code Style Guidelines

- Use meaningful variable and function names
- Include JSDoc comments for functions
- Handle errors appropriately
- Follow the ESLint configuration
- Keep functions small and focused
- Use consistent formatting

## 📝 Notes

- All programs are designed for educational purposes
- Programs include comprehensive error handling
- Output is formatted with comments for clarity
- Code follows modern JavaScript best practices
- HTML display is self-contained (no external dependencies)

## 🤝 Contributing

1. Follow the existing code style
2. Add comprehensive documentation
3. Include error handling
4. Test your changes
5. Run ESLint before submitting

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
