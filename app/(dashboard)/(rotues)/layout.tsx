import Header from "@/components/header/header";
import SideBar from "@/components/header/sider-bar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen ">
                <SideBar />
    
            <div className="flex flex-col w-full">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default DashBoardLayout;
