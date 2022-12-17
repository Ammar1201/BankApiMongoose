import classes from './ShowTransfer.module.css';

const ShowTransfer = ({ transfer }) => {
  return (
    <div className={classes.card}>
      <h3>Transfer ID: {transfer._id}</h3>
      <h3>Sender User ID: {transfer.senderUserID}</h3>
      <h3>Sender User Account Number: {transfer.senderUserAccountNumber}</h3>
      <h3>Receiver User ID: {transfer.receiverUserID}</h3>
      <h3>Receiver User Account Number: {transfer.receiverUserAccountNumber}</h3>
      <h3>Transferred Amount: {transfer.transferredAmount}</h3>
      <h3>Transfer Time: {transfer.transferTime}</h3>
    </div>
  )
}

export default ShowTransfer