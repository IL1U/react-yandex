import React from 'react';
import './HistoryPage.css';
import Button from "../Button/Button"


function HistoryPage(props) {
    const data = [
        {
            idJob: 1368, 
            statusJob: "good",
            timeJob: "1 ч 30 мин",
            note: "add documentation for postgres scaler",
            branch: "master",
            idCommit: "9c9f0b9",
            author: "Philip Kirkorov",
            date: "21 янв, 03:26"
        },
        {
            idJob: 1365, 
            statusJob: "fail",
            timeJob: "1 ч 30 мин",
            note: "Super cool UI kit for making websites that look like games",
            branch: "super-cool-ui-kit",
            idCommit: "952e5567",
            author: "Vadim Makeev",
            date: "21 янв, 03:06"
        },
        {
            idJob: 1367, 
            statusJob: "pending",
            timeJob: "1 ч 30 мин",
            note: "upgrade typescript to 3.8",
            branch: "master",
            idCommit: "b4636ab",
            author: "Philip Kirkorov",
            date: "21 янв, 03:01"

        },
        {
            idJob: 1365, 
            statusJob: "fail",
            timeJob: "1 ч 30 мин",
            note: "Super cool UI kit for making websites that look like games",
            branch: "super-cool-ui-kit",
            idCommit: "952e5567",
            author: "Vadim Makeev",
            date: "21 янв, 03:06"
        },
        {
            idJob: 1368, 
            statusJob: "good",
            timeJob: "1 ч 30 мин",
            note: "add documentation for postgres scaler",
            branch: "master",
            idCommit: "9c9f0b9",
            author: "Philip Kirkorov",
            date: "21 янв, 03:26"
        },
        {
            idJob: 1365, 
            statusJob: "fail",
            timeJob: "1 ч 30 мин",
            note: "Super cool UI kit for making websites that look like games",
            branch: "super-cool-ui-kit",
            idCommit: "952e5567",
            author: "Vadim Makeev",
            date: "21 янв, 03:06"
        },
        {
            idJob: 1367, 
            statusJob: "pending",
            timeJob: "1 ч 30 мин",
            note: "upgrade typescript to 3.8",
            branch: "master",
            idCommit: "b4636ab",
            author: "Philip Kirkorov",
            date: "21 янв, 03:01"
        },
        {
            idJob: 1368, 
            statusJob: "good",
            timeJob: "1 ч 30 мин",
            note: "add documentation for postgres scaler",
            branch: "master",
            idCommit: "9c9f0b9",
            author: "Philip Kirkorov",
            date: "21 янв, 03:26"
        },
        {
            idJob: 1365, 
            statusJob: "fail",
            timeJob: "1 ч 30 мин",
            note: "Super cool UI kit for making websites that look like games",
            branch: "super-cool-ui-kit",
            idCommit: "952e5567",
            author: "Vadim Makeev",
            date: "21 янв, 03:06"
        }      
    ];

  return (
    <div className="HistoryPage">
        {data.map((element) => <Button props={element} key={Date.now()}/>)}
        <button>Show more</button>
    </div>
  );
}

export default HistoryPage;