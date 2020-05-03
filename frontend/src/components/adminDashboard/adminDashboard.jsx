import React, {useEffect, useState} from 'react';
import Header from '../core/header';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Assistant from '../core/assistant';
import {deleteWorkspaceRequest, logoutRequest} from '../../redux/actions';
import {setEditWorkspace} from '../../redux/actions';
import {SIGNUP_PAGE} from '../../configs/constants';

const AdminDashboard = (props) => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user, shallowEqual);
    const [workspaces, setWorkspaces] = useState(user ? user.workspaces : []);
    useEffect(() => {
        setWorkspaces(user ? user.workspaces : []);
    }, [user]);
    if (!user) {
        return (<div>Loading</div>);
    }
    const handleSearch = (event) => {
        const filteredSpaces = user.workspaces.filter(space => space.name.includes(event.target.value));
        setWorkspaces(filteredSpaces);
    };

    return (
        <div className="admin-dashboard">
            <div className="header-container">
                <Header
                    logout={() => dispatch(logoutRequest())}
                    user={user}/>
            </div>
            <div className="dashboard-content">
               <div className="content-item">
                   <div className="search-wrapper">
                       <input
                           onChange={handleSearch}
                           placeholder="Search"
                           type="text" />
                       <img
                           src={require('../../images/search1.png')}
                           alt="search"/>
                   </div>
               </div>
                <div className="content-item">
                    {workspaces && workspaces.map(assistant => (
                        <Assistant
                            editAction={workspace => {
                                dispatch(setEditWorkspace(workspace));
                                props.history.push(SIGNUP_PAGE);
                            }}
                            deleteAction={spaceId => {
                                dispatch(deleteWorkspaceRequest({
                                    userId: user._id,
                                    spaceId,
                                }));
                            }}
                            key={assistant.name}
                            assistant={assistant}/>
                    ))}
                </div>
                <div className="content-item">
                    <button
                        onClick={() => {
                            props.history.push(SIGNUP_PAGE);
                        }}>
                        + Add Workspace
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;