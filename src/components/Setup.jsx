function Setup() {

  return (
    <>
      <h2>Preparation</h2>

      <details>
        <summary>Install</summary>
        <p className="py-2">Install Truffle and Ganache globally.</p>
        <code className="block bg-gray-200 p-2 rounded-lg">$ npm install -g truffle ganache</code>
      </details>

      <details>
        <summary>Ganache and MetaMask</summary>
        <p className="py-2">
          Open a terminal and run Ganache, a simulated Ethereum blockchain on your machine.
        </p>
        <code className="block bg-gray-200 p-2 rounded-lg">$ ganache</code>
        <p>From the list of generated private keys, import the first one to MetaMask.</p>
      </details>

      <details>
        <summary>Truffle</summary>
        <p className="py-2">
          Keep Ganache running and open another terminal. Let's compile and deploy our
          contracts to Ganache.
        </p>
        <code className="block bg-gray-200 p-2 rounded-lg">
          <div>{`$ cd truffle\n`}</div>
          <div>{`$ truffle migrate --network development\n`}
                <span className="text-gray-500">
                    # The `development` network points to Ganache, it's configured in
                    truffle/truffle-config.js on line 45.
                </span>
          </div>
        </code>
      </details>
    </>
  );
}

export default Setup;
