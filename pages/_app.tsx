import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {jsonRpcProvider} from 'wagmi/providers/jsonRpc'

  
const { chains, provider } = configureChains(
  [bscTestnet],
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: 'https://rpc.ankr.com/bsc_testnet_chapel', // go to https://www.ankr.com/protocol/ to get a free RPC for your network if you're not using Bsc testenet
        };
      },
    }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'cyber connect starter',
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})
export default function App({ Component, pageProps }: AppProps) {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
<Component {...pageProps} />
</RainbowKitProvider>
</WagmiConfig>
  )
}
