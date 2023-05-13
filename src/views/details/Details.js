import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '../../services/user';
import Form from './components/form/Form';
import Table from './components/table/Table';
import './Details.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const { login } = useParams();

    const [userDetail, setUserDetail] = useState([]);
    const [userRepositories, setUserRepositories] = useState([]);
  
    useEffect(() => {
        fetchDetailsUser();
        fetchUserRepositories();
    }, []);
  
    async function fetchDetailsUser() {
      try {
        const { data } = await service.getUser(login);
        setUserDetail(<Form value={data}/>);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchUserRepositories() {
        try {
          const { data } = await service.getRepositories(login);
          setUserRepositories(<Table value={data}/>);
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <div className='container-details'>
            <div className='mb-1'>
                {userDetail}
            </div>
            <div>
                {userRepositories}
            </div>
        </div>
    )
}