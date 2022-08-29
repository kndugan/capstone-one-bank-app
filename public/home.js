function Home(){
  return (
    <Card
      txtcolor="black"
      header="Bank of Dugan Home Page"
      title="Welcome to the Bank"
      text="We are here for all of your banking needs. Create an Account or Login."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
