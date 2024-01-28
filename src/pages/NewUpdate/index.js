import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const navigate = useNavigate();

  // vigilante_id definido na rota NewUpdate
  const {vigilante_id} = useParams();

  // recebe e manipula eventos do form
  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {name, vehicle};

    if (vigilante_id === '0') {
      try {
        await api.post('api/v1/vigilantes', data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao salvar');        
      }      
    } else {
      try {
        await api.patch(`api/v1/vigilantes/${vigilante_id}`, data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao salvar');        
      }      
    }
  }

  // carrega registro especifico na api e seta dados para atualização
  async function loadVigilante(){
    try {
      const response = await api.get(`api/v1/vigilantes/${vigilante_id}`,{});
      setName(response.data.name);
      setVehicle(response.data.vehicle);
    } catch (error) {
      alert('Erro ao atualizar');
      navigate('/');      
    }
  }

  // chama loadVigilante e preenche form
  useEffect(() => {
    if (vigilante_id === '0') {
      return;      
    } else {
      loadVigilante();      
    }
  }, [vigilante_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Vigilantes Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>
          
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input data-testid="input1" id="name" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Nome" value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="vehicle">Veiculo</label>
            <input data-testid="input2" id="vehicle" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Veiculo" value={vehicle}
            onChange={e => setVehicle(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}