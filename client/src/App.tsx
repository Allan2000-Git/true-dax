import React, { Suspense } from 'react';
import './App.css';
import {HashLoader} from "react-spinners";
import Header from './components/Header';

const ContactUsFormLazyComponent = React.lazy(() => import('./components/ContactUsForm'));

const FallBack = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <HashLoader color="#4f46e5" />
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<FallBack />}>
        <ContactUsFormLazyComponent />
      </Suspense>
    </>
  );
}

export default App;
