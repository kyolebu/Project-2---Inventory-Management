"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    // inventory helper functions\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]) // stores inventory\n    ;\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true) // adds and remove stuff\n    ;\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\") // stores name of item we type out\n    ;\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(collection(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"));\n        const docs = await getDocs(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc1)=>{\n            inventoryList.push({\n                name: doc1.id,\n                ...doc1.data()\n            });\n        });\n        setInventory(inventoryList);\n    };\n    // helper functions to add items\n    const addItem = async (item)=>{\n        const docRef = doc(collection(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item);\n        const docSnap = await getDoc(docRef);\n        if (docSnap.exists()) {\n            const { quantity } = docSnap.data();\n            await setDoc(docRef, {\n                quantity: quantity + 1\n            });\n        } else {\n            await setDoc(docRef, {\n                quantit: 1\n            });\n        }\n        await updateInventory();\n    };\n    // helper functions to remove items\n    const removeItem = async (item)=>{\n        const docRef = doc(collection(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item);\n        const docSnap = await getDoc(docRef);\n        if (docSnap.exists()) {\n            const { quantity } = docSnap.data();\n            if (quantity === 1) {\n                await deleteDoc(docRef);\n            } else {\n                await setDoc(docRef, {\n                    quantity: quantity - 1\n                });\n            }\n        }\n        await updateInventory;\n    };\n    // it runs updateInventory when something in the dependency array changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    // models\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                open: open,\n                onClose: handleClose\n            }, void 0, false, {\n                fileName: \"/Users/kyleyu/Headstarter/Project 2 – Inventory Management/app/page.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                position: \"absolute\",\n                top: \"50%\",\n                left: \"50%\",\n                transform: \"translate=(-50%,-50%)\",\n                width: 400,\n                bgcolor: \"white\",\n                border: \"2px solid #000\",\n                boxShadow: 24,\n                padding: 4,\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"h6\",\n                        children: \"Add Item\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kyleyu/Headstarter/Project 2 – Inventory Management/app/page.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        width: \"100%\",\n                        direction: \"row\",\n                        spacing: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/kyleyu/Headstarter/Project 2 – Inventory Management/app/page.js\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kyleyu/Headstarter/Project 2 – Inventory Management/app/page.js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kyleyu/Headstarter/Project 2 – Inventory Management/app/page.js\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h1\",\n                children: \"Inventory Management\"\n            }, void 0, false, {\n                fileName: \"/Users/kyleyu/Headstarter/Project 2 – Inventory Management/app/page.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kyleyu/Headstarter/Project 2 – Inventory Management/app/page.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"F+xEgjtEff/gS9XdwPEqPhbrRPY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ1U7QUFDTDtBQUNxQztBQUM5QjtBQUU1QixTQUFTVTs7SUFFdEIsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFLEVBQUUsbUJBQW1COztJQUNsRSxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUMsTUFBTSx3QkFBd0I7O0lBQy9ELE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxJQUFJLGtDQUFrQzs7SUFFL0UsTUFBTWdCLGtCQUFrQjtRQUN0QixNQUFNQyxXQUFXVCx5REFBS0EsQ0FBQ1UsV0FBV2hCLGdEQUFTQSxFQUFFO1FBQzdDLE1BQU1pQixPQUFPLE1BQU1DLFFBQVFIO1FBQzNCLE1BQU1JLGdCQUFnQixFQUFFO1FBQ3hCRixLQUFLRyxPQUFPLENBQUMsQ0FBQ0M7WUFDWkYsY0FBY0csSUFBSSxDQUFDO2dCQUNqQkMsTUFBTUYsS0FBSUcsRUFBRTtnQkFDWixHQUFHSCxLQUFJSSxJQUFJLEVBQUU7WUFDZjtRQUNGO1FBQ0FoQixhQUFhVTtJQUNmO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1PLFVBQVUsT0FBT0M7UUFDckIsTUFBTUMsU0FBU1AsSUFBSUwsV0FBV2hCLGdEQUFTQSxFQUFFLGNBQWMyQjtRQUN2RCxNQUFNRSxVQUFVLE1BQU1DLE9BQU9GO1FBRTdCLElBQUdDLFFBQVFFLE1BQU0sSUFBRztZQUNsQixNQUFNLEVBQUNDLFFBQVEsRUFBQyxHQUFHSCxRQUFRSixJQUFJO1lBQy9CLE1BQU1RLE9BQU9MLFFBQVE7Z0JBQUNJLFVBQVVBLFdBQVc7WUFBQztRQUM1QyxPQUNJO1lBQ0YsTUFBTUMsT0FBT0wsUUFBUTtnQkFBQ00sU0FBUztZQUFDO1FBQ2xDO1FBQ0EsTUFBTXBCO0lBQ1Y7SUFFQSxtQ0FBbUM7SUFDbkMsTUFBTXFCLGFBQWEsT0FBT1I7UUFDeEIsTUFBTUMsU0FBU1AsSUFBSUwsV0FBV2hCLGdEQUFTQSxFQUFFLGNBQWMyQjtRQUN2RCxNQUFNRSxVQUFVLE1BQU1DLE9BQU9GO1FBRTdCLElBQUdDLFFBQVFFLE1BQU0sSUFBRztZQUNsQixNQUFNLEVBQUNDLFFBQVEsRUFBQyxHQUFHSCxRQUFRSixJQUFJO1lBQy9CLElBQUlPLGFBQWEsR0FBRTtnQkFDakIsTUFBTUksVUFBVVI7WUFDbEIsT0FDSTtnQkFDRixNQUFNSyxPQUFPTCxRQUFRO29CQUFDSSxVQUFVQSxXQUFXO2dCQUFDO1lBQzlDO1FBQ0Y7UUFDQSxNQUFNbEI7SUFDUjtJQUVBLHlFQUF5RTtJQUN6RWYsZ0RBQVNBLENBQUM7UUFDUmU7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTO0lBQ1QsTUFBTXVCLGFBQWEsSUFBTTFCLFFBQVE7SUFDakMsTUFBTTJCLGNBQWMsSUFBTTNCLFFBQVE7SUFFbEMscUJBQ0UsOERBQUNWLGdIQUFHQTtRQUNGc0MsT0FBTTtRQUNOQyxRQUFPO1FBQ1BDLFNBQVE7UUFDUkMsZ0JBQWU7UUFDZkMsWUFBVztRQUNYQyxLQUFLOzswQkFFTCw4REFBQzFDLGdIQUFLQTtnQkFBQ1EsTUFBTUE7Z0JBQU1tQyxTQUFTUDs7Ozs7OzBCQUMxQiw4REFBQ3JDLGdIQUFHQTtnQkFDRjZDLFVBQVM7Z0JBQ1RDLEtBQUk7Z0JBQ0pDLE1BQUs7Z0JBQ0xDLFdBQVU7Z0JBQ1ZWLE9BQU87Z0JBQ1BXLFNBQVE7Z0JBQ1JDLFFBQU87Z0JBQ1BDLFdBQVc7Z0JBQ1hDLFNBQVM7Z0JBQ1RaLFNBQVE7Z0JBQ1JhLGVBQWM7Z0JBQ2RWLEtBQUs7O2tDQUVMLDhEQUFDekMsZ0hBQVVBO3dCQUFDb0QsU0FBUTtrQ0FBSzs7Ozs7O2tDQUN6Qiw4REFBQ25ELGdIQUFLQTt3QkFDSm1DLE9BQU07d0JBQ05pQixXQUFVO3dCQUNWQyxTQUFTO2tDQUNQLDRFQUFDcEQsZ0hBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsQiw4REFBQ0YsZ0hBQVVBO2dCQUFDb0QsU0FBUTswQkFBSzs7Ozs7Ozs7Ozs7O0FBRy9CO0dBaEd3QmhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2ZpcmVzdG9yZX0gZnJvbSAnQC9maXJlYmFzZSdcbmltcG9ydCB7IEJveCwgTW9kYWwsIFR5cG9ncmFwaHksIFN0YWNrLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgcXVlcnkgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgLy8gaW52ZW50b3J5IGhlbHBlciBmdW5jdGlvbnNcbiAgY29uc3QgW2ludmVudG9yeSwgc2V0SW52ZW50b3J5XSA9IHVzZVN0YXRlKFtdKSAvLyBzdG9yZXMgaW52ZW50b3J5XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpIC8vIGFkZHMgYW5kIHJlbW92ZSBzdHVmZlxuICBjb25zdCBbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IHVzZVN0YXRlKCcnKSAvLyBzdG9yZXMgbmFtZSBvZiBpdGVtIHdlIHR5cGUgb3V0XG5cbiAgY29uc3QgdXBkYXRlSW52ZW50b3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNuYXBzaG90ID0gcXVlcnkoY29sbGVjdGlvbihmaXJlc3RvcmUsICdpbnZlbnRvcnknKSlcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgZ2V0RG9jcyhzbmFwc2hvdClcbiAgICBjb25zdCBpbnZlbnRvcnlMaXN0ID0gW11cbiAgICBkb2NzLmZvckVhY2goKGRvYyk9PntcbiAgICAgIGludmVudG9yeUxpc3QucHVzaCh7XG4gICAgICAgIG5hbWU6IGRvYy5pZCxcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzZXRJbnZlbnRvcnkoaW52ZW50b3J5TGlzdClcbiAgfVxuXG4gIC8vIGhlbHBlciBmdW5jdGlvbnMgdG8gYWRkIGl0ZW1zXG4gIGNvbnN0IGFkZEl0ZW0gPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwgJ2ludmVudG9yeScpLCBpdGVtKVxuICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKVxuXG4gICAgaWYoZG9jU25hcC5leGlzdHMoKSl7XG4gICAgICBjb25zdCB7cXVhbnRpdHl9ID0gZG9jU25hcC5kYXRhKClcbiAgICAgIGF3YWl0IHNldERvYyhkb2NSZWYsIHtxdWFudGl0eTogcXVhbnRpdHkgKyAxfSlcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGF3YWl0IHNldERvYyhkb2NSZWYsIHtxdWFudGl0OiAxfSlcbiAgICAgIH1cbiAgICAgIGF3YWl0IHVwZGF0ZUludmVudG9yeSgpXG4gIH1cblxuICAvLyBoZWxwZXIgZnVuY3Rpb25zIHRvIHJlbW92ZSBpdGVtc1xuICBjb25zdCByZW1vdmVJdGVtID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoY29sbGVjdGlvbihmaXJlc3RvcmUsICdpbnZlbnRvcnknKSwgaXRlbSlcbiAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZilcblxuICAgIGlmKGRvY1NuYXAuZXhpc3RzKCkpe1xuICAgICAgY29uc3Qge3F1YW50aXR5fSA9IGRvY1NuYXAuZGF0YSgpXG4gICAgICBpZiAocXVhbnRpdHkgPT09IDEpe1xuICAgICAgICBhd2FpdCBkZWxldGVEb2MoZG9jUmVmKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgYXdhaXQgc2V0RG9jKGRvY1JlZiwge3F1YW50aXR5OiBxdWFudGl0eSAtIDF9KVxuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB1cGRhdGVJbnZlbnRvcnlcbiAgfVxuXG4gIC8vIGl0IHJ1bnMgdXBkYXRlSW52ZW50b3J5IHdoZW4gc29tZXRoaW5nIGluIHRoZSBkZXBlbmRlbmN5IGFycmF5IGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVJbnZlbnRvcnkoKVxuICB9LCBbXSlcblxuICAvLyBtb2RlbHNcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHNldE9wZW4odHJ1ZSlcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBcbiAgICAgIHdpZHRoPVwiMTAwdndcIiBcbiAgICAgIGhlaWdodD1cIjEwMHZoXCIgXG4gICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBcbiAgICAgIGdhcD17Mn1cbiAgICA+XG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PjwvTW9kYWw+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCIgXG4gICAgICAgICAgdG9wPVwiNTAlXCIgXG4gICAgICAgICAgbGVmdD1cIjUwJVwiIFxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZT0oLTUwJSwtNTAlKVwiXG4gICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICBiZ2NvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIGJvcmRlcj1cIjJweCBzb2xpZCAjMDAwXCJcbiAgICAgICAgICBib3hTaGFkb3c9ezI0fVxuICAgICAgICAgIHBhZGRpbmc9ezR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGdhcD17M31cbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkFkZCBJdGVtPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxTdGFjayBcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCIgXG4gICAgICAgICAgICBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZD48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+SW52ZW50b3J5IE1hbmFnZW1lbnQ8L1R5cG9ncmFwaHk+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiQm94IiwiTW9kYWwiLCJUeXBvZ3JhcGh5IiwiU3RhY2siLCJUZXh0RmllbGQiLCJxdWVyeSIsIkhvbWUiLCJpbnZlbnRvcnkiLCJzZXRJbnZlbnRvcnkiLCJvcGVuIiwic2V0T3BlbiIsIml0ZW1OYW1lIiwic2V0SXRlbU5hbWUiLCJ1cGRhdGVJbnZlbnRvcnkiLCJzbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJkb2NzIiwiZ2V0RG9jcyIsImludmVudG9yeUxpc3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsIm5hbWUiLCJpZCIsImRhdGEiLCJhZGRJdGVtIiwiaXRlbSIsImRvY1JlZiIsImRvY1NuYXAiLCJnZXREb2MiLCJleGlzdHMiLCJxdWFudGl0eSIsInNldERvYyIsInF1YW50aXQiLCJyZW1vdmVJdGVtIiwiZGVsZXRlRG9jIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwib25DbG9zZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJnY29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJwYWRkaW5nIiwiZmxleERpcmVjdGlvbiIsInZhcmlhbnQiLCJkaXJlY3Rpb24iLCJzcGFjaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});