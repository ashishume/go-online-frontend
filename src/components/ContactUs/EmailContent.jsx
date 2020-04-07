import React from "react";

const EmailContent = (props) => {
  let orgs="N/A";
  if (props.organisation != undefined) {
    orgs = props.organisation;
  }
  const mailBody = `Hi I'm ${props.name}, Here are my details:
    Email: ${props.email},
    Phone: ${props.phone},
    City: ${props.city},
    State: ${props.state},
    Organisation: ${orgs}
    `;

  const body = {
    toEmail: "digiedulive@gmail.com",
    subject: `${props.name} has contacted via Digiedu.live`,
    body: mailBody,
  };


  return body;
};

export default EmailContent;
