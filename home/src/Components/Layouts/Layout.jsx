import { createContext, lazy } from "react";
const Header = lazy(() => import("./Header"));

export const DashboardContext = createContext({});

export default function Layout({ children, className = "", }) {
    className = ["h-screen","overflow-hidden","flex","flex-col",className,].join(" ");
    return (
        <DashboardContext.Provider value={null} className={className}>
            <Header />
            <div className="flex flex-grow p-3">
                {children}
            </div>
        </DashboardContext.Provider>
    );
}