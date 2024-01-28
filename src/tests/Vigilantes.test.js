import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Vigilantes from '../pages/Vigilantes';

describe('testes da tela Vigilantes', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Vigilantes/>
      </BrowserRouter>
    );
  });

  it('Existe card em Vigilantes?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Vigilantes?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Vigilantes?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Vigilantes?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Vigilantes?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});