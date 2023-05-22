
type Props = {
  checkoutDate : string|null
};

export const CheckoutReturnDate = ({ checkoutDate  } : Props) => {
  return (
    <span className="return-date-badge">{checkoutDate ? checkoutDate : 'Pending..'}</span>
  )
}
