/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/contentScript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contentScript.ts":
/*!******************************!*\
  !*** ./src/contentScript.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var PDF_MIME_TYPES = [
    "application/pdf",
    "application/x-pdf",
    "application/octet-stream",
    "application/acrobat",
    "applications/vnd.pdf",
    "text/pdf",
    "text/x-pdf"
];
function getPDFURL(sources) {
    return new Promise(function (resolve, reject) {
        var errorCount = 0;
        sources.forEach(function (source) {
            fetch(source.url, { method: "HEAD" })
                .then(function (res) {
                var contentType = res.headers.get("content-type") || "";
                var isPDF = PDF_MIME_TYPES.some(function (type) { return contentType.includes(type); });
                if (isPDF) {
                    resolve(source);
                }
                else {
                    throw new Error();
                }
            })
                .catch(function (_err) {
                errorCount++;
                if (errorCount === sources.length) {
                    reject("NO PDF URL");
                }
            });
        });
    });
}
window.addEventListener("message", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var _a, sources, pdfSource, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (event.source !== window)
                    return [2];
                _a = event.data.type;
                switch (_a) {
                    case "CHECK_INSTALL_SCINAPSE_EXTENSION": return [3, 1];
                    case "GET_PDF": return [3, 2];
                }
                return [3, 7];
            case 1: return [3, 8];
            case 2:
                sources = event.data.sources;
                _b.label = 3;
            case 3:
                _b.trys.push([3, 5, , 6]);
                return [4, getPDFURL(sources)];
            case 4:
                pdfSource = _b.sent();
                fetch(pdfSource.url)
                    .then(function (res) {
                    if (!res.ok) {
                        throw new Error(res.status + " - " + res.statusText + ", " + res.body);
                    }
                    return res.blob();
                })
                    .then(function (blob) {
                    event.ports[0].postMessage({
                        success: true,
                        data: blob
                    });
                });
                return [3, 6];
            case 5:
                err_1 = _b.sent();
                console.error(err_1);
                event.ports[0].postMessage({
                    success: false,
                    message: err_1.message
                });
                return [3, 6];
            case 6: return [3, 8];
            case 7: return [3, 8];
            case 8: return [2];
        }
    });
}); }, false);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsaUJBdUZBO0FBaEZBLElBQU0sY0FBYyxHQUFHO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7Q0FDYixDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsT0FBc0I7SUFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFNO1lBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2lCQUNsQyxJQUFJLENBQUMsYUFBRztnQkFDUCxJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFELElBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLGtCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7Z0JBQ3RFLElBQUksS0FBSyxFQUFFO29CQUNULE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUNuQjtZQUNILENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsY0FBSTtnQkFDVCxVQUFVLEVBQUUsQ0FBQztnQkFDYixJQUFJLFVBQVUsS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO29CQUNqQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDckIsU0FBUyxFQUNULFVBQU0sS0FBSzs7Ozs7Z0JBRVQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU07b0JBQUUsV0FBTztnQkFFNUIsVUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzt5QkFDaEIsa0NBQWtDLENBQUMsQ0FBbkMsY0FBa0M7eUJBR2xDLFNBQVMsQ0FBQyxDQUFWLGNBQVM7OztvQkFGWixjQUFNOztnQkFHQSxPQUFPLEdBQWtCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7O2dCQUc5QixXQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUM7O2dCQUFwQyxTQUFTLEdBQUcsU0FBd0I7Z0JBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO3FCQUNqQixJQUFJLENBQUMsYUFBRztvQkFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTt3QkFDWCxNQUFNLElBQUksS0FBSyxDQUNWLEdBQUcsQ0FBQyxNQUFNLFdBQU0sR0FBRyxDQUFDLFVBQVUsVUFBSyxHQUFHLENBQUMsSUFBTSxDQUNqRCxDQUFDO3FCQUNIO29CQUNELE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLGNBQUk7b0JBQ1IsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7d0JBQ3pCLE9BQU8sRUFBRSxJQUFJO3dCQUNiLElBQUksRUFBRSxJQUFJO3FCQUNYLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzs7OztnQkFFTCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUcsQ0FBQyxDQUFDO2dCQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztvQkFDekIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUcsQ0FBQyxPQUFPO2lCQUNyQixDQUFDLENBQUM7O29CQUVMLGNBQU07b0JBSU4sY0FBTTs7OztLQUVYLEVBQ0QsS0FBSyxDQUNOLENBQUMiLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvbnRlbnRTY3JpcHQudHNcIik7XG4iLCJpbnRlcmZhY2UgUGFwZXJTb3VyY2Uge1xuICBpZDogbnVtYmVyO1xuICBwYXBlcklkOiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xuICBpc1BkZjogYm9vbGVhbjtcbn1cblxuY29uc3QgUERGX01JTUVfVFlQRVMgPSBbXG4gIFwiYXBwbGljYXRpb24vcGRmXCIsXG4gIFwiYXBwbGljYXRpb24veC1wZGZcIixcbiAgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgXCJhcHBsaWNhdGlvbi9hY3JvYmF0XCIsXG4gIFwiYXBwbGljYXRpb25zL3ZuZC5wZGZcIixcbiAgXCJ0ZXh0L3BkZlwiLFxuICBcInRleHQveC1wZGZcIlxuXTtcblxuZnVuY3Rpb24gZ2V0UERGVVJMKHNvdXJjZXM6IFBhcGVyU291cmNlW10pOiBQcm9taXNlPFBhcGVyU291cmNlPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGVycm9yQ291bnQgPSAwO1xuICAgIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgICAgZmV0Y2goc291cmNlLnVybCwgeyBtZXRob2Q6IFwiSEVBRFwiIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgfHwgXCJcIjtcbiAgICAgICAgICBjb25zdCBpc1BERiA9IFBERl9NSU1FX1RZUEVTLnNvbWUodHlwZSA9PiBjb250ZW50VHlwZS5pbmNsdWRlcyh0eXBlKSk7XG4gICAgICAgICAgaWYgKGlzUERGKSB7XG4gICAgICAgICAgICByZXNvbHZlKHNvdXJjZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKF9lcnIgPT4ge1xuICAgICAgICAgIGVycm9yQ291bnQrKztcbiAgICAgICAgICBpZiAoZXJyb3JDb3VudCA9PT0gc291cmNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlamVjdChcIk5PIFBERiBVUkxcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICBcIm1lc3NhZ2VcIixcbiAgYXN5bmMgZXZlbnQgPT4ge1xuICAgIC8vIFdlIG9ubHkgYWNjZXB0IG1lc3NhZ2VzIGZyb20gb3Vyc2VsdmVzXG4gICAgaWYgKGV2ZW50LnNvdXJjZSAhPT0gd2luZG93KSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmRhdGEudHlwZSkge1xuICAgICAgY2FzZSBcIkNIRUNLX0lOU1RBTExfU0NJTkFQU0VfRVhURU5TSU9OXCI6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiR0VUX1BERlwiOiB7XG4gICAgICAgIGNvbnN0IHNvdXJjZXM6IFBhcGVyU291cmNlW10gPSBldmVudC5kYXRhLnNvdXJjZXM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwZGZTb3VyY2UgPSBhd2FpdCBnZXRQREZVUkwoc291cmNlcyk7XG4gICAgICAgICAgZmV0Y2gocGRmU291cmNlLnVybClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgYCR7cmVzLnN0YXR1c30gLSAke3Jlcy5zdGF0dXNUZXh0fSwgJHtyZXMuYm9keX1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVzLmJsb2IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihibG9iID0+IHtcbiAgICAgICAgICAgICAgZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YTogYmxvYlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG4gIGZhbHNlXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==