# NXCLang Extension

This is a Visual Studio Code extension that provides support for the NXCLang programming language, designed for game controller macros with commands like `Press`, `Loop`, and `ImgCmp`. It includes syntax highlighting, code completion, and hover tooltips for `.nxc` files.

## Features

- **Syntax Highlighting**: Highlights NXCLang commands (e.g., `Press`, `Hold`), buttons (e.g., `A`, `UP_L`), and parameters.
- **Code Completion**: Suggests commands and button names while typing.
- **Hover Tooltips**: Displays command descriptions when hovering over commands like `Press` or `Loop`.
- **Language Configuration**: Supports comments (`//`) and proper indentation for `Loop` and `ImgCmp` blocks.

## Getting Started

1. Install this extension in VSCode.
2. Open or create a `.nxc` file.
3. Start writing NXCLang code, such as:
   ```nxc
   Press(A, 0.1, 0.2)
   Loop(5)
     Wait(1.0)
     ImgCmp("image1", 2.0, 0.8)