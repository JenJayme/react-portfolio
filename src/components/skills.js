import React from 'react';
import Table from 'react-bootstrap/Table';
import skillsData from '../components/skills-data';
// import BootstrapTable from 'react-bootstrap-table-next';

function Skills () {
    const Columns = [
    {
        dataField: 'skill',
        text: 'Skill',
        sort: true
    },{
        dataField: 'category',
        text: 'Category',
        sort: true
    }] 

    const SkillsTable = () => {
        let SkillsWTags = [];
        for (var i = 0; i < skillsData.length; i++) {
            SkillsWTags.push(
            <tr>
                <td>
                    <p>{skillsData[i].category}</p>
                </td>
                <td>
                    <p>{skillsData[i].skill}</p>
                </td>
            </tr>
        )}
    }

    return (

        <Table striped bordered hover variant="dark" keyField='id' data={ skillsData } columns={ Columns } 
        />
    )
}

export default Skills;