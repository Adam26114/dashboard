
import { SideNavItem } from "@/types";
import {
    TbLayoutDashboard,
    TbAlignBoxCenterStretch,
    TbCategory,
    TbBoxSeam,
    TbTruckDelivery,
    TbColorFilter,
    TbUserShield,
    TbUsers,
    TbViewportWide,
    TbHexagonNumber1,
    TbHexagonNumber2,
    TbHexagonNumber3,
    TbHexagonNumber4,
    TbAlertCircle,
    TbError404,
    TbServerOff,
    TbBarrierBlockOff,
    TbSettings,
    TbUserCircle,
    TbBrandMailgun,
} from "react-icons/tb";

export const MenuLinks: SideNavItem[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: <TbLayoutDashboard className="h-4 w-4" />,
    },
    {
        title: "Billboards",
        path: "/billboards",
        icon: <TbAlignBoxCenterStretch className="h-4 w-4" />,
    },
    {
        title: "Categories",
        path: "/categories",
        icon: <TbCategory className="h-4 w-4" />,
    },
    {
        title: "Sizes",
        path: "/sizes",
        icon: <TbViewportWide className="h-4 w-4" />,
    },
    {
        title: "Colors",
        path: "/colors",
        icon: <TbColorFilter className="h-4 w-4" />,
    },
    {
        title: "Products",
        path: "/products",
        icon: <TbBoxSeam className="h-4 w-4" />,
    },
    {
        title: "Orders",
        path: "/orders",
        icon: <TbTruckDelivery className="h-4 w-4" />,
    },
    {
        title: "Authentication",
        path: "/auth",
        icon: <TbUserShield className="h-4 w-4" />,
        submenu: true,
        subMenuItems: [
            {
                title: "User",
                path: "auth/user",
                icon: <TbUsers className="h-4 w-4" />,
            },
            {
                title: "Sign In",
                path: "/auth/sign-in",
                icon: <TbHexagonNumber1 className="h-4 w-4" />,
            },
            {
                title: "Sign Up",
                path: "/auth/sign-up",
                icon: <TbHexagonNumber2 className="h-4 w-4" />,
            },
            {
                title: "Forget Password",
                path: "/auth/forgetpassword",
                icon: <TbHexagonNumber3 className="h-4 w-4" />,
            },
            {
                title: "OTP",
                path: "/auth/otp",
                icon: <TbHexagonNumber4 className="h-4 w-4" />,
            },
        ],
    },
    {
        title: "Error Pages",
        path: "/error",
        icon: <TbAlertCircle className="h-4 w-4" />,
        submenu: true,
        subMenuItems: [
            {
                title: "Not Found",
                path: "/error/404",
                icon: <TbError404 className="h-4 w-4" />,
            },
            {
                title: "Internal Server Error",
                path: "/error/500",
                icon: <TbServerOff className="h-4 w-4" />,
            },
            {
                title: "Maintenance Error",
                path: "/error/503",
                icon: <TbBarrierBlockOff className="h-4 w-4" />,
            },
        ],
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <TbSettings className="h-4 w-4" />,
        submenu: true,
        subMenuItems: [
            {
                title: "Profile",
                path: "/setting/profile",
                icon: <TbUserCircle className="h-4 w-4" />,
            },
            {
                title: "Mail",
                path: "/setting/mail",
                icon: <TbBrandMailgun className="h-4 w-4" />,
            },
        ],
    },
];
