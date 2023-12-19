import './App.css';
import PaymentForm from './components/PaymentForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <>

<div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div>
        <h1 className='text-2xl font-sans font-bold text-center mb-5 '>Yoga Registration Form </h1>
       <div className='grid grid-cols-2 gap-6'>
       <RegistrationForm />
        <PaymentForm/> 
        </div> 
      </div>
    </div>
    </>

  );
}

export default App;
