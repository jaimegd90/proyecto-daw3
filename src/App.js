import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discotecas from './pages/Discotecas'
import Djs from './pages/Djs'
import Contacto from './pages/Contacto';
import { supabase } from './supabase/client';
import NoExiste from './pages/NoExiste';
import Inicio from './pages/Inicio';
import Andalucia from './pages/Comunidades/Andalucia'
import Castilla from './pages/Comunidades/Castilla'
import Cataluña from './pages/Comunidades/Cataluña'
import Valenciana from './pages/Comunidades/Valenciana'
import Madrid from './pages/Comunidades/Madrid'
import Murcia from './pages/Comunidades/Murcia'
import Castilla2 from './pages/Comunidades/Castilla2';
import Andalucia2 from './pages/Comunidades/Andalucia2';
import Cataluña2 from './pages/Comunidades/Cataluña2';
import Valenciana2 from './pages/Comunidades/Valenciana2';
import Madrid2 from './pages/Comunidades/Madrid2';
import Murcia2 from './pages/Comunidades/Murcia2';
import Dj1 from './pages/djs/Dj1';
import Dj2 from './pages/djs/Dj2';
import Dj3 from './pages/djs/Dj3';
import Dj4 from './pages/djs/Dj4';
import Dj5 from './pages/djs/Dj5';
import Dj6 from './pages/djs/Dj6';
import Dj7 from './pages/djs/Dj7';
import Dj8 from './pages/djs/Dj8';
import PasswordReset from './pages/PasswordReset';
import SignUp from './pages/SignUp';
import UpdatePassword from './pages/UpdatePassword';
import Perfil from './pages/Perfil';
import Discoteca1 from './pages/discotecas/Discoteca1';
import Discoteca2 from './pages/discotecas/Discoteca2';
import Discoteca3 from './pages/discotecas/Discoteca3';
import Discoteca4 from './pages/discotecas/Discoteca4';
import Discoteca5 from './pages/discotecas/Discoteca5';
import Discoteca6 from './pages/discotecas/Discoteca6';
import Discoteca7 from './pages/discotecas/Discoteca7';
import Discoteca8 from './pages/discotecas/Discoteca8';

function App() {
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)})
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NoExiste/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/djs' element={<Djs/>}/>
        <Route path='/discotecas' element={<Discotecas/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/andalucia' element={<Andalucia/>}/>
        <Route path='/castilla' element={<Castilla/>}/>
        <Route path='/cataluña' element={<Cataluña/>}/>
        <Route path='/valenciana' element={<Valenciana/>}/>
        <Route path='/madrid' element={<Madrid/>}/>
        <Route path='/murcia' element={<Murcia/>}/>
        <Route path='/andalucia2' element={<Andalucia2/>}/>
        <Route path='/castilla2' element={<Castilla2/>}/>
        <Route path='/cataluña2' element={<Cataluña2/>}/>
        <Route path='/valenciana2' element={<Valenciana2/>}/>
        <Route path='/madrid2' element={<Madrid2/>}/>
        <Route path='/murcia2' element={<Murcia2/>}/>
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/dj1" element={<Dj1 />} />
        <Route path="/dj2" element={<Dj2 />} />
        <Route path="/dj3" element={<Dj3 />} />
        <Route path="/dj4" element={<Dj4 />} />
        <Route path="/dj5" element={<Dj5 />} />
        <Route path="/dj6" element={<Dj6 />} />
        <Route path="/dj7" element={<Dj7 />} />
        <Route path="/dj8" element={<Dj8 />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/discoteca1" element={<Discoteca1 />} />
        <Route path="/discoteca2" element={<Discoteca2 />} />
        <Route path="/discoteca3" element={<Discoteca3 />} />
        <Route path="/discoteca4" element={<Discoteca4 />} />
        <Route path="/discoteca5" element={<Discoteca5 />} />
        <Route path="/discoteca6" element={<Discoteca6 />} />
        <Route path="/discoteca7" element={<Discoteca7 />} />
        <Route path="/discoteca8" element={<Discoteca8 />} />
      </Routes>

    </div>
  );
}

export default App;
