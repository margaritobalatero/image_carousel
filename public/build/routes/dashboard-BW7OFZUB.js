import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_db_server
} from "/build/_shared/chunk-RAKYURNE.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-ZPNSMHJO.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-ESYTMXZC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/dashboard.jsx
var import_node = __toESM(require_node(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\dashboard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\dashboard.jsx"
  );
}
function getYouTubeEmbedUrl(url) {
  try {
    const ytMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w\-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }
  } catch (err) {
    console.error("YouTube parse error:", err);
  }
  return null;
}
function Dashboard() {
  _s();
  const {
    items,
    search
  } = useLoaderData();
  const [editingId, setEditingId] = (0, import_react2.useState)(null);
  const [detailItem, setDetailItem] = (0, import_react2.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "\u{1F3A0} Media Carousel" }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "search-form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "q", defaultValue: search, placeholder: "Search caption..." }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "\u{1F50D} Search" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel", children: items.map((item) => {
      const youtubeEmbed = getYouTubeEmbedUrl(item.mediaUrl);
      const isEditing = editingId === item._id;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel-item", children: [
        item.type === "image" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.mediaUrl, alt: item.caption }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 104,
          columnNumber: 40
        }, this) : youtubeEmbed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { width: "250", height: "180", src: youtubeEmbed, title: item.caption, frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerPolicy: "strict-origin-when-cross-origin", allowFullScreen: true, style: {
          borderRadius: "12px"
        } }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 104,
          columnNumber: 104
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { src: item.mediaUrl, controls: true, playsInline: true, preload: "metadata", style: {
          borderRadius: "12px",
          width: "250px",
          height: "180px",
          objectFit: "cover"
        }, children: "Your browser does not support the video tag." }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 107,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: item.caption }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "d-inline mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: item._id }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "delete" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-danger btn-sm w-100", children: "Delete" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: item._id }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 128,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "update" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 129,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "caption", defaultValue: item.caption, placeholder: "Caption", className: "form-control mb-1", required: true }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 130,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "mediaUrl", defaultValue: item.mediaUrl, placeholder: "Media URL", className: "form-control mb-1", required: true }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 132,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "btn btn-success btn-sm w-100 mb-1", children: "Save" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 134,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn btn-secondary btn-sm w-100", onClick: () => setEditingId(null), children: "Cancel" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 138,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 127,
          columnNumber: 28
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-primary btn-sm w-100 mt-1", onClick: () => setEditingId(item._id), children: "Update" }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 142,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-info btn-sm w-100 mt-1", onClick: () => setDetailItem(item), children: "Details" }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 148,
          columnNumber: 15
        }, this)
      ] }, item._id, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 103,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    detailItem && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-overlay", onClick: () => setDetailItem(null), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: detailItem.caption }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 160,
        columnNumber: 13
      }, this),
      detailItem.type === "image" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: detailItem.mediaUrl, alt: detailItem.caption, style: {
        maxWidth: "100%",
        borderRadius: "12px"
      } }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 161,
        columnNumber: 44
      }, this) : getYouTubeEmbedUrl(detailItem.mediaUrl) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { width: "560", height: "315", src: getYouTubeEmbedUrl(detailItem.mediaUrl), title: detailItem.caption, frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerPolicy: "strict-origin-when-cross-origin", allowFullScreen: true, style: {
        borderRadius: "12px"
      } }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 164,
        columnNumber: 59
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { src: detailItem.mediaUrl, controls: true, autoPlay: true, style: {
        maxWidth: "100%",
        borderRadius: "12px"
      }, children: "Your browser does not support the video tag." }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 167,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-secondary mt-2", onClick: () => setDetailItem(null), children: "Close" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 174,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 158,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 157,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/add", className: "add-link", children: "\u2795 Add Media" }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/login", className: "add-link", children: "\u2795 Logout" }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "QSec/etP5oVt6hWjNvsTwNWLvzw=", false, function() {
  return [useLoaderData];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-BW7OFZUB.js.map
