"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const AdminProducts_1 = __importDefault(require("../components/AdminProducts"));
const routes = [
    {
        path: "/admin",
        element: <AdminProducts_1.default />,
    }
];
const routesList = () => {
    return routes.map((route, index) => {
        return <react_router_dom_1.Route key={index} path={route.path} element={route.element}/>;
    });
};
const Protectedroutes = () => {
    return (<react_router_dom_1.Routes>
        {routesList()}
        </react_router_dom_1.Routes>);
};
exports.default = Protectedroutes;
