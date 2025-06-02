# Hardhat Task Loader

A package that automatically loads all Hardhat tasks from the `/tasks` folder. Supports both ESM and CommonJS projects.

## 📦 Installation

```bash
# npm
npm install hardhat-task-loader

# yarn
yarn add hardhat-task-loader
```

## Usage

Import `loadTasks` in your Hardhat config file and call it.

```ts
import { loadTasks } from "hardhat-task-loader";

loadTasks();
```

## 📄 License

MIT