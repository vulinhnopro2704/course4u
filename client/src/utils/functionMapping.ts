import React from "react";
import { handleLogout } from "../redux/slice/user.slice.ts";
import { Dispatch } from "@reduxjs/toolkit";
import { UnknownAction } from "redux-saga";
import { NavigateFunction } from "react-router-dom";

const handleRegistrationListClick = (e: React.MouseEvent, navigate: NavigateFunction) => {
    e.preventDefault();
    navigate("/admin");
}

const handleCourseListClick = (e: React.MouseEvent, navigate: NavigateFunction) => {
    e.preventDefault();
    navigate("/admin/courses");
}

const handleEditProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
}

const handleSignOutClick = (e: React.MouseEvent, navigate: NavigateFunction, dispatch: Dispatch<UnknownAction>) => {
    e.preventDefault();
    navigate("/login");
    dispatch(handleLogout());
}

const functionMapping = (e: React.MouseEvent, navigate: NavigateFunction, dispatch: Dispatch<UnknownAction>, itemAlt: string) => {
    switch (itemAlt) {
        case "registration_list":
            handleRegistrationListClick(e, navigate);
            break;
        case "course_list":
            handleCourseListClick(e, navigate);
            break;
        case "edit_profile":
            handleEditProfileClick(e);
            break;
        case "sign_out":
            handleSignOutClick(e, navigate, dispatch);
            break;
    }
}

export default functionMapping;