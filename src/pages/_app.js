import Layout from '@/components/NavBar/Layout';
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <Layout UserButton={<UserButton />}>
          <Component {...pageProps} />
        </Layout>
      </SignedIn>

      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  )
}