import { Avatar, Button } from "@material-tailwind/react";
import { FiLogOut } from "react-icons/fi";
import { AiFillCaretDown, AiOutlineUser } from "react-icons/ai";
import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
} from "@material-tailwind/react";
import toast from "react-hot-toast";

const ProfileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const profileMenuItems = [
        {
            label: "Baten Ali",
            icon: AiOutlineUser,
            do: () => {
                setIsMenuOpen(false);
            },
        },
        {
            label: "Sign Out",
            icon: FiLogOut,
            do: () => {
                toast.success("Sign out successful");
                setIsMenuOpen(false);
            },
        },
    ];

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-1/312608190_167713892606159_4879759661066248940_n.jpg?stp=c559.196.400.400a_dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHwGiASdwfsX6vzDm9jc7PRiJK2Yvz2q8iIkrZi_ParyCN0NeDFPdSmQLRZiOeB_Uek4VyGPovZW56sgr2NN1rU&_nc_ohc=_kIoSvSXBcYAX9dw-Xa&_nc_ht=scontent.fdac137-1.fna&oh=00_AfAk3fH-IZ9-vRd0tKL160SuvLi5KjyCadNmG0w9pqH9Tg&oe=65342B41"
                    />
                    <AiFillCaretDown
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1 bg-[var(--bg)]">
                {profileMenuItems?.map((item, key) => {
                    const isLastItem = key === profileMenuItems?.length - 1;
                    return (
                        <MenuItem
                            key={item?.label}
                            onClick={item?.do}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            {React?.createElement(item?.icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className={isLastItem ? "font-bold" : "font-normal"}
                                color={isLastItem ? "red" : "var(--text)"}
                            >
                                {item?.label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default ProfileMenu;
