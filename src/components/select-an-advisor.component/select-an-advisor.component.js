import React, { useState, useEffect } from 'react';
import './select-an-advisor.component.css'
import MyTextField from '../textfield.component/mytextfield.component';
import getData from '../../data_access/getData';
import getAdvisors from '../../data_access/getAdvisors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


async function getStudentData(userId, userType) {
  var url = ('/user/' + userType + '/' + userId);
  var obj = await getData(url);
  return obj;
}

async function getAdvisorList(userDepartment) {
  var obj = await getAdvisors(userDepartment);
  return obj;
}

function getList(studentObject) {

  var mycontentlist = [{
    label: 'Name Surname',
    content: studentObject.name + " " + studentObject.surname
  }, {
    label: 'Email',
    content: studentObject.email
  }, {
    label: 'Student ID',
    content: studentObject.id

  }]

  return mycontentlist;
}

const clickMe = (obj) => {
  console.log(this);
}

function cardView(obj) {

  return (
    <Card className='root' variant="outlined"  onClick={() => 
      {clickMe(this)}}>          
      <CardContent>
        <Typography className='title' color="textSecondary" gutterBottom>
          {obj.name + " " + obj.surname}
        </Typography>
        <Typography variant="h5" component="h2">
          {obj.id}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function SelectAdvisor() {

  var userId = localStorage.getItem('id');
  var userType = localStorage.getItem('type');
  const [advisorList, setAdvisorList] = useState([]);
  const [userInfo, setUserInfo] = useState(Object);
  const [contentList, setContentList] = useState([]);
  useEffect(async () => {
    var studentObject = await getStudentData(userId, userType);
    var advisorList = await getAdvisorList(studentObject.department);
    setUserInfo(studentObject);
    setContentList(getList(studentObject));
    setAdvisorList(advisorList);
  }, []);




  return (
    <div className='select-advisor'>
      <h1 className='titlem'>Select Advisor</h1>
      <MyTextField myprops={contentList} />

        <List style={{marginTop:50,flexDirection:'row'}} className='root' >
        {advisorList.map((tile) => (
          <ListItem key={tile.img} cols={tile.cols || 1}>
            {cardView(tile)}
          </ListItem>
        ))}
        </List>

    </div>

  )
}
