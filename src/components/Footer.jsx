function Link({ uri, text }) {
  return <a href={uri} target="_blank" rel="noreferrer" className="pr-1">{text}</a>;
}

function Footer() {
  return (
    <footer>
      <h2>More resources</h2>
      <Link uri={"https://trufflesuite.com"} text={"Truffle"} />
      <Link uri={"https://reactjs.org"} text={"React"} />
      <Link uri={"https://nextjs.org"} text={"NextJs"} />
      <Link uri={"https://tailwindcss.com"} text={"Tailwind"} />
      <Link uri={"https://soliditylang.org"} text={"Solidity"} />
      <Link uri={"https://ethereum.org"} text={"Ethereum"} />
    </footer >
  );
}

export default Footer;
