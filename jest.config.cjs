module.exports = {
    maxWorkers: 10,
    preset: 'ts-jest',
    testEnvironment: 'node', // Використовує Node.js як середовище виконання
    roots: ['<rootDir>/tests'], // Директорія з тестами
    moduleFileExtensions: ['ts', 'js'], // Розширення для пошуку модулів
    transform: {
        '^.+\\.tsx?$': 'ts-jest' // Обробляє файли TypeScript
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // Regex для пошуку тестів
};
