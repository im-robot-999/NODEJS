@echo off
echo ========================================
echo    Node.js Programs Collection
echo ========================================
echo.
echo 1. Opening HTML display...
start programs_display.html
echo.
echo 2. Running ESLint check...
npx eslint *.js
echo.
echo 3. If you want to fix linting issues automatically, run:
echo    npx eslint *.js --fix
echo.
echo 4. To install dependencies (if not already installed):
echo    npm install
echo.
pause
