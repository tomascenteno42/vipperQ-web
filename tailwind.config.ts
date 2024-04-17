import type { Config } from "tailwindcss";
import { twMerge } from "tailwind-merge";
import { theme } from "flowbite-react";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    navbar: {
      root: {
        base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 max-w-screen-2xl mx-auto dark:bg-gray-900",
      },
      collapse: {
        base: "w-full lg:block lg:w-auto",
      },
      link: {
        base: "block py-2 pr-4 pl-3 lg:p-0",
        active: {
          on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",
          off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white",
        },
        disabled: {
          on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
          off: "",
        },
      },
      toggle: {
        base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden",
        icon: "h-6 w-6 shrink-0",
      },
    },
    badge: {
      root: {
        color: {
          info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
        },
        size: {
          xs: "py-1 px-2 text-xs",
        },
      },
    },
    button: {
      base: "group flex items-stretch items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none [&>span]:rounded-lg",
      color: {
        gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-blue-700 :ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
        info: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      },
      outline: {
        color: {
          gray: "border border-gray-200 dark:border-gray-500",
        },
      },
    },
    checkbox: {
      root: {
        base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 text-blue-600",
        color: {
          default:
            "focus:ring-blue-600 dark:ring-offset-blue-600 dark:focus:ring-blue-600 text-blue-600",
        },
      },
    },
    datepicker: {
      popup: {
        footer: {
          button: {
            base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-blue-300",
            today:
              "bg-blue-700 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
          },
        },
      },
      views: {
        days: {
          items: {
            item: {
              selected: "bg-blue-700 text-white hover:bg-blue-600",
            },
          },
        },
        months: {
          items: {
            item: {
              selected: "bg-blue-700 text-white hover:bg-blue-600",
            },
          },
        },
        years: {
          items: {
            item: {
              selected: "bg-blue-700 text-white hover:bg-blue-600",
            },
          },
        },
        decades: {
          items: {
            item: {
              selected: "bg-blue-700 text-white hover:bg-blue-600",
            },
          },
        },
      },
    },
    pagination: {
      pages: {
        selector: {
          active: twMerge(
            theme.pagination.pages.selector.active,
            "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
          ),
        },
      },
    },
    progress: {
      color: {
        cyan: "bg-blue-600",
      },
    },
    radio: {
      root: {
        base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600 text-blue-600",
      },
    },
    select: {
      field: {
        select: {
          colors: {
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          },
        },
      },
    },
    tabs: {
      tablist: {
        tabitem: {
          base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-blue-300 focus:outline-none",
          styles: {
            default: {
              active: {
                on: "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500",
              },
            },
            underline: {
              base: "rounded-t-lg",
              active: {
                on: "text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
              },
            },
            pills: {
              base: "",
              active: {
                on: "rounded-lg bg-blue-600 text-white",
              },
            },
            fullWidth: {
              base: "ml-0 first:ml-0 w-full rounded-none flex",
              active: {
                on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
              },
            },
          },
        },
      },
    },
    textarea: {
      colors: {
        gray: "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
      },
    },
    textInput: {
      field: {
        input: {
          colors: {
            gray: "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          },
          withIcon: {
            on: "pl-10",
          },
        },
      },
    },
    toggleSwitch: {
      toggle: {
        base: twMerge(
          theme.toggleSwitch.toggle.base,
          "group-focus:ring-blue-500/25"
        ),
        checked: {
          color: {
            blue: "bg-blue-700 border-blue-700",
          },
        },
      },
    },
    tooltip: {
      base: twMerge(theme.tooltip.base, "!mx-0"),
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
