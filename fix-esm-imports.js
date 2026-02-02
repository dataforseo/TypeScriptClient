import fs from 'fs';
import path from 'path';

const baseDir = 'dist/esm';

function fixImportsInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fixed = content.replace(
        /from\s+(['"])(\.\/[^'"]+?)(?<!\.js)\1/g,
        (match, quote, pathPart) => `from ${quote}${pathPart}.js${quote}`
    );

    if (content !== fixed) {
        fs.writeFileSync(filePath, fixed, 'utf-8');
        console.log(`✔ Fixed: ${filePath}`);
    }
}

function processDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDir(fullPath);
        } else if (entry.isFile() && fullPath.endsWith('.js')) {
            fixImportsInFile(fullPath);
        }
    }
}

processDir(baseDir);
console.log('✔ All .js extensions processed');
