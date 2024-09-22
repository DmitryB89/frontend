import React from 'react';
import PropTypes from 'prop-types';
import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
interface SidebarProps {
    className?:string

}

export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed}, [className] )}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />

            </div>

        </div>
    );
};



