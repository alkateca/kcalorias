import { useState, useEffect } from 'react';
import { getDashboard, getAlimentos, addAlimento, registrarConsumo, resetDashboard } from './api';

function App() {
  const [dashboard, setDashboard] = useState(null);
  const [alimentos, setAlimentos] = useState([]);
  
  const [novoAlimento, setNovoAlimento] = useState({ nome: '', kcalBase: '', porcaoBase: '' });
  const [consumo, setConsumo] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dashRes = await getDashboard();
      setDashboard(dashRes.data);

      const aliRes = await getAlimentos();
      setAlimentos(aliRes.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleAddAlimento = async (e) => {
    e.preventDefault();
    if (!novoAlimento.nome || !novoAlimento.kcalBase || !novoAlimento.porcaoBase) {
      alert("Preencha todos os campos do novo alimento.");
      return;
    }
    try {
      await addAlimento(novoAlimento);
      setNovoAlimento({ nome: '', kcalBase: '', porcaoBase: '' }); 
      fetchData();
    } catch (error) {
      console.error("Erro ao adicionar alimento:", error);
    }
  };

  const handleConsumo = async (alimentoId) => {
    const quantidade = consumo[alimentoId];
    if (!quantidade || quantidade <= 0) {
      alert("Por favor, insira uma quantidade válida.");
      return;
    }
    
    try {
      await registrarConsumo({ alimentoId: alimentoId, quantidadeConsumida: quantidade });
      fetchData(); 
      
      setConsumo(prev => ({ ...prev, [alimentoId]: '' }));
    } catch (error) {
      console.error("Erro ao registrar consumo:", error);
    }
  };

  const handleReset = async () => {
    if (confirm("Tem certeza que deseja resetar a semana?")) {
      await resetDashboard();
      fetchData();
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col gap-8">
          
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">Dashboard Semanal</h1>
            {dashboard ? (
              <div>
                <p className="text-lg">Total Semanal: <span className="font-bold text-gray-300">{dashboard.metaTotalSemanal} kcal</span></p>
                <p className="text-xl md:text-2xl mt-2">Restante: <span className="font-bold text-green-400">{dashboard.metaRestanteSemanal.toFixed(2)} kcal</span></p>
                <button 
                  onClick={handleReset}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded"
                >
                  Resetar Semana
                </button>
              </div>
            ) : <p>Carregando dashboard...</p>}
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Cadastrar Alimento</h2>
            <form onSubmit={handleAddAlimento} className="flex flex-col gap-3">
              <input 
                type="text" placeholder="Nome (Ex: Maçã)"
                className="bg-slate-700 p-2 rounded"
                value={novoAlimento.nome}
                onChange={e => setNovoAlimento({...novoAlimento, nome: e.target.value})}
              />
              <input 
                type="number" placeholder="Kcal (Ex: 95)"
                className="bg-slate-700 p-2 rounded"
                value={novoAlimento.kcalBase}
                onChange={e => setNovoAlimento({...novoAlimento, kcalBase: e.target.value})}
              />
              <input 
                type="number" placeholder="Porção Base (Ex: 1) (unidade, g, ml)"
                className="bg-slate-700 p-2 rounded"
                value={novoAlimento.porcaoBase}
                onChange={e => setNovoAlimento({...novoAlimento, porcaoBase: e.target.value})}
              />
              <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
                Cadastrar
              </button>
            </form>
          </div>

        </div>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Consumir Alimentos</h2>
          
          <div className="flex flex-col gap-4 md:max-h-[600px] md:overflow-y-auto pr-2">
            {alimentos.length > 0 ? alimentos.map(alimento => (
              <div key={alimento._id} className="bg-slate-700 p-4 rounded-md">
                <p className="text-lg font-semibold">{alimento.nome}</p>
                <p className="text-sm text-gray-400">{alimento.kcalBase} kcal por {alimento.porcaoBase} (g, ml, un)</p>
                

                <div className="flex flex-col sm:flex-row gap-2 mt-3">
                  <input 
                    type="number"
                    placeholder="Quantidade"
                    className="bg-slate-600 p-2 rounded w-full"
                    value={consumo[alimento._id] || ''}
                    onChange={e => setConsumo({...consumo, [alimento._id]: e.target.value})}
                  />
                  <button 
                    onClick={() => handleConsumo(alimento._id)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
                  >
                    Consumir
                  </button>
                </div>
              </div>
            )) : <p>Nenhum alimento cadastrado.</p>}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;