import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function Vigilantes(){

  const [my_vigilantes, setVigilantes] = useState([]);
  const navigate = useNavigate();

  // read, busca todos os elementos na api
  useEffect(() => {
    api.get('api/v1/vigilantes',{})
    .then(response => {setVigilantes(response.data)})
  }, []);

  // update, navega para NewUpdate
  async function updateVigilante(id){
    try {
      navigate(`/newupdate/${id}`);
    } catch (error) {
      alert('erro ao acessar NewUpdate');      
    }
  }

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Vigilantes Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Veiculo</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_vigilantes.map(vigilante => (
              <tr key={vigilante.id}>
                <th scope="row">{vigilante.id}</th>
                <td>{vigilante.name}</td>
                <td>{vigilante.vehicle}</td>
                <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}
                  onClick={() => updateVigilante(vigilante.id)}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger" style={{margin: '2px'}}>Excluir</button>

                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}