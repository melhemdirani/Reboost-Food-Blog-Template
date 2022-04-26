import React,{useState, useContext} from 'react';
import './Sidebar.scss';
import { Data } from '../Blog/FakeData';
import SidebarCard from './SidebarCard';
import { AiFillCloseCircle } from "react-icons/ai";
import { UseSidebarContext } from '../Navbar/Navbar';

export default function Sidebar() {

    const [sideMenu, setSideMenu] = useContext(UseSidebarContext);

    return (
        <>
            <div className='sidebar'>
                <div>
                    <div className="closeButton">
                        <AiFillCloseCircle style={{cursor:'pointer'}} onClick={()=>setSideMenu(!sideMenu)} />
                    </div>
                    <h3>Treading Post</h3>
                    {
                        Data.map(data => <SidebarCard data={data} key={data.id} />)
                    }
                </div>
            </div>
        </>
    );
}