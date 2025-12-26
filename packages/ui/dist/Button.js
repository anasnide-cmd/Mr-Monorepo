"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, style: { padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }, children: children }));
};
exports.Button = Button;
