import { useTonWallet } from "@tonconnect/ui-react";

function WalletInfo() {
  const wallet = useTonWallet();

  return (
    <div>
      {wallet ? (
        <div>
          <p>Адрес кошелька: {wallet.account.address}</p>
          <p>Приложение: {wallet.device.appName}</p>
        </div>
      ) : (
        <p>Кошелек не подключен</p>
      )}
    </div>
  );
}

export default WalletInfo;
