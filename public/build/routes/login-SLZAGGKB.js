import {
  require_session_server
} from "/build/_shared/chunk-KLC3C6MR.js";
import {
  require_auth_server
} from "/build/_shared/chunk-AW3OKIJH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-NXHPYJXQ.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-2HMVH2PB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/login.jsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_session_server = __toESM(require_session_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.jsx"
  );
  import.meta.hot.lastModified = "1761318694897.0688";
}
function Login() {
  _s();
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "Login" }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    data?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-400 mb-4", children: data.error }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 52,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/login", className: "bg-gray-800 p-8 rounded-xl w-80 space-y-4", reloadDocument: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "username", placeholder: "Username", required: true, className: "w-full p-2 rounded bg-gray-700 text-white" }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", placeholder: "Password", required: true, className: "w-full p-2 rounded bg-gray-700 text-white" }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-green-600 w-full py-2 rounded hover:bg-green-500", children: "Login" }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-sm", children: [
        "Don\u2019t have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/signup", className: "text-blue-400 underline", children: "Sign Up" }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.jsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(Login, "EuQJlwp+1/dClAy+OhUaWQ2c6r8=", false, function() {
  return [useActionData];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-SLZAGGKB.js.map
