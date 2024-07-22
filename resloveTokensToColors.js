const fs = require("fs");

function generateCSSFromJSON(jsonFile, outputFile) {
  // Read JSON file
  fs.readFile(jsonFile, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading JSON file: ${err}`);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const cssContent = generateCSS(jsonData);

      // Write CSS to file
      fs.writeFile(outputFile, cssContent, (err) => {
        if (err) {
          console.error(`Error writing CSS file: ${err}`);
          return;
        }
        console.log(`CSS file ${outputFile} successfully generated.`);
      });
    } catch (err) {
      console.error(`Error parsing JSON: ${err}`);
    }
  });
}

function generateCSS(data) {
  // Define CSS template
  const cssTemplate = `
    /*generated at build timeaa */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
      --foreground: 224 71.4% 4.1%;
      --card: 0 0% 100%;
      --card-foreground: 224 71.4% 4.1%;
      --popover: 0 0% 100%;
      --popover-foreground: 224 71.4% 4.1%;
      --primary: 220.9 39.3% 11%;
      --primary-foreground: 210 20% 98%;
      --secondary: 220 14.3% 95.9%;
      --secondary-foreground: 220.9 39.3% 11%;
      --muted: 220 14.3% 95.9%;
      --muted-foreground: 220 8.9% 46.1%;
      --accent: 220 14.3% 95.9%;
      --accent-foreground: 220.9 39.3% 11%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 210 20% 98%;
      --border: 220 13% 91%;
      --input: 220 13% 91%;
      --ring: 224 71.4% 4.1%;
      --radius: 0.5rem;
      --chart-1: 12 76% 61%;
      --chart-2: 173 58% 39%;
      --chart-3: 197 37% 24%;
      --chart-4: 43 74% 66%;
      --chart-5: 27 87% 67%;
${generateModeProperties(data.light)}
  }

  .dark {
    --background: 224 71.4% 4.1%;
      --foreground: 210 20% 98%;
      --card: 224 71.4% 4.1%;
      --card-foreground: 210 20% 98%;
      --popover: 224 71.4% 4.1%;
      --popover-foreground: 210 20% 98%;
      --primary: 210 20% 98%;
      --primary-foreground: 220.9 39.3% 11%;
      --secondary: 215 27.9% 16.9%;
      --secondary-foreground: 210 20% 98%;
      --muted: 215 27.9% 16.9%;
      --muted-foreground: 217.9 10.6% 64.9%;
      --accent: 215 27.9% 16.9%;
      --accent-foreground: 210 20% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 210 20% 98%;
      --border: 215 27.9% 16.9%;
      --input: 215 27.9% 16.9%;
      --ring: 216 12.2% 83.9%;
      --chart-1: 220 70% 50%;
      --chart-2: 160 60% 45%;
      --chart-3: 30 80% 55%;
      --chart-4: 280 65% 60%;
      --chart-5: 340 75% 55%;
${generateModeProperties(data.dark)}
  }
}

  @layer base {
    * {
      @apply border-border;
    }
    body {
      @apply bg-background text-foreground;
    }
  }
`;

  // Helper function to generate properties for light and dark modes
  function generateModeProperties(modeData) {
    const properties = [];
    for (let key in modeData) {
      for (let subKey in modeData[key]) {
        const hexColor = modeData[key][subKey].value; // Assuming this is already a valid hex color
        properties.push(`    --${key}-${subKey}: ${hexColor};`);
      }
    }
    return properties.join("\n");
  }

  return cssTemplate;
}

// Example usage:
generateCSSFromJSON("tokens.json", "app/globals.css");
