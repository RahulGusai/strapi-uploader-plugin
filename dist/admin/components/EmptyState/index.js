"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Box_1 = require("@strapi/design-system/Box");
const EmptyStateLayout_1 = require("@strapi/design-system/EmptyStateLayout");
const Plus_1 = __importDefault(require("@strapi/icons/Plus"));
const Button_1 = require("@strapi/design-system/Button");
const Illo_1 = require("../../assets/Illo");
const AddVideo_1 = __importDefault(require("../Modal/AddVideo"));
const EmptyState = ({ update }) => {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    return (react_1.default.createElement(Box_1.Box, { padding: 10, background: "neutral100" },
        react_1.default.createElement(EmptyStateLayout_1.EmptyStateLayout, { icon: react_1.default.createElement(Illo_1.Illo, null), content: "You don't have any videos yet", action: react_1.default.createElement(Button_1.Button, { variant: "secondary", startIcon: react_1.default.createElement(Plus_1.default, null), onClick: () => setIsVisible(true) }, "Add your first videos") }),
        isVisible && (react_1.default.createElement(AddVideo_1.default, { update: update, close: () => setIsVisible(false) }))));
};
exports.default = EmptyState;
