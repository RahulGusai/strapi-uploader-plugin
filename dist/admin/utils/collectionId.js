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
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../server/utils/config");
function fetchCollectionIdMap(collectionIds) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, config_1.configGumletClient)();
        const collectionIdMap = {};
        for (const collectionId of collectionIds) {
            try {
                const response = yield client.get(`video/sources/${collectionId}`);
                const collectionName = (_a = response.data) === null || _a === void 0 ? void 0 : _a.name;
                if (collectionName) {
                    collectionIdMap[collectionName] = collectionId;
                }
            }
            catch (error) {
                console.error(`Error fetching collection name for ID ${collectionId}:`, error);
            }
        }
        return collectionIdMap;
    });
}
exports.default = fetchCollectionIdMap;
