"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const tsyringe_1 = require("tsyringe");
const postModel_1 = __importDefault(require("../models/postModel"));
let PostRepository = class PostRepository {
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield postModel_1.default.findAll();
        });
    }
    getPostById(post_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield postModel_1.default.findOne({
                where: { id: post_id }
            });
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield postModel_1.default.create(post);
        });
    }
    updatePost(postFound, post) {
        return __awaiter(this, void 0, void 0, function* () {
            yield postFound.update(post);
        });
    }
    deletePost(post_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield postModel_1.default.destroy({
                where: { id: post_id }
            });
        });
    }
};
PostRepository = __decorate([
    (0, tsyringe_1.injectable)()
], PostRepository);
exports.default = PostRepository;
