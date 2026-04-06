"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rolemiddleware = void 0;
const Rolemiddleware = (role) => {
    return (req, res, next) => {
        if (!req.user || !role.includes(req.user.role)) {
            return res.status(403).json({ msg: "Forbidden entry" });
        }
        next();
    };
};
exports.Rolemiddleware = Rolemiddleware;
