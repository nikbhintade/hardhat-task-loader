import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

/**
 * Loads all task files from the 'tasks' directory in the current working directory.
 * Task files should be named with a .js or .ts extension.
 * If the 'tasks' directory does not exist, it will be created.
 */
export function loadTasks() {
    const userDir = process.cwd();
    const tasksDir = path.join(userDir, "tasks");

    if (!fs.existsSync(tasksDir)) {
        fs.mkdirSync(tasksDir);
        console.log(`Created tasks folder at ${tasksDir}`);
        return;
    }

    const files = fs.readdirSync(tasksDir).filter((f) =>
        f.endsWith(".js") || f.endsWith(".ts")
    );

    for (const file of files) {
        const fullPath = path.join(tasksDir, file);

        // Use require for CJS or dynamic import (non-awaited) for ESM
        if (isCommonJS()) {
            require(fullPath);
        } else {
            // For ESM environments
            import(pathToFileURL(fullPath).href);
        }
    }
}

function isCommonJS() {
    return typeof require !== "undefined" && typeof module !== "undefined";
}
