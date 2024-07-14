import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return(
        <div className="h-full w-full flex flex-col gsp-y-10 items-center justify-center bg-sky-500">
            <Navbar />
            {children}
        </div>
    );
}

export default ProtectedLayout;