import React from "react";
import { Header } from "./styles";
import { MdSearch, MdPersonOutline } from "react-icons/md";

export default function Index({ user }) {
    return (
        <Header>
            <div className="header-input-container">
                <MdSearch />
                <input type="text" placeholder="Search" />
            </div>
            <div className="header-user">
                <MdPersonOutline />
                <span>{user.name}</span>
            </div>
        </Header>
    );
}
