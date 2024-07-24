"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_plugin_1 = require("@strapi/helper-plugin");
const pluginId_1 = __importDefault(require("../pluginId"));
const assetsRequests = {
    getAllvideos: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, helper_plugin_1.request)(`/${pluginId_1.default}/api-video-asset`, {
            method: 'GET',
        });
    }),
    createVideoId: (body) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, helper_plugin_1.request)(`/${pluginId_1.default}/api-video-asset/create`, {
            method: 'POST',
            body,
        });
    }),
    create: (body) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, helper_plugin_1.request)(`/${pluginId_1.default}/api-video-asset`, {
            method: 'POST',
            body,
        });
    }),
    update: (id, videoId, body) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, helper_plugin_1.request)(`/${pluginId_1.default}/api-video-asset/${id}/${videoId}`, {
            method: 'PUT',
            body,
        });
    }),
    delete: (id, videoId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, helper_plugin_1.request)(`/${pluginId_1.default}/api-video-asset/${id}/${videoId}`, {
            method: 'DELETE',
        });
    }),
};
exports.default = assetsRequests;
