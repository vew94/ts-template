import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: [".agents", ".claude", "pnpm-workspace.yaml"],
  jsdoc: true,
  sortImports: {
    customGroups: [
      {
        elementNamePattern: ["@/app", "@/app/**"],
        groupName: "fsd-app",
        selector: "internal",
      },
      {
        elementNamePattern: ["@/pages", "@/pages/**"],
        groupName: "fsd-pages",
        selector: "internal",
      },
      {
        elementNamePattern: ["@/widgets", "@/widgets/**"],
        groupName: "fsd-widgets",
        selector: "internal",
      },
      {
        elementNamePattern: ["@/features", "@/features/**"],
        groupName: "fsd-features",
        selector: "internal",
      },
      {
        elementNamePattern: ["@/entities", "@/entities/**"],
        groupName: "fsd-entities",
        selector: "internal",
      },
      {
        elementNamePattern: ["@/shared", "@/shared/**"],
        groupName: "fsd-shared",
        selector: "internal",
      },
    ],
    groups: [
      "type",
      { newlinesBetween: true },
      "builtin",
      "external",
      { newlinesBetween: true },
      "fsd-app",
      "fsd-pages",
      "fsd-widgets",
      "fsd-features",
      "fsd-entities",
      "fsd-shared",
      { newlinesBetween: true },
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "style",
      "unknown",
    ],
    newlinesBetween: false,
  },
});
