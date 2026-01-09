import { useState } from 'react'

export default function CalcularArea() {

  const [largura, setLargura] = useState('');

  const [comprimento, setComprimento] = useState('');

  const [precoM2, setPrecoM2] = useState(50);

  const area = Number(largura) * Number(comprimento);

  const custoEstimado = area * precoM2;

  const custoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(custoEstimado);

  function resetar() {
    setLargura('')
    setComprimento('')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-2xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Orçamento</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Material</label>
          <select
            value={precoM2}
            onChange={(e) => setPrecoM2(Number(e.target.value))}
            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="50">Cerâmica (R$ 50,00/m²)</option>
            <option value="120">Porcelanato (R$ 120,00/m²)</option>
            <option value="450">Mármore (R$ 450,00/m²)</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4"> 
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Largura (m)</label>
            <input
              type="number" step="0.01" value={largura}
              onChange={(e) => setLargura(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Comprimento (m)</label>
            <input
              type="number" step="0.01" value={comprimento}
              onChange={(e) => setComprimento(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        {area > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100 animate-fade-in">
            <p className="text-sm text-blue-600 uppercase font-bold tracking-wider">Total Estimado</p>
            <p className="text-3xl font-black text-blue-900">{custoFormatado}</p>
            <p className="text-xs text-blue-400 mt-1 italic">Considerando {area.toFixed(2)} m²</p>
          </div>
        )}

        <button
          onClick={resetar}
          className="w-full mt-4 py-3 bg-gray-800 hover:bg-black text-white font-bold rounded-xl transition-all duration-200 shadow-lg"
        >
          NOVO ORÇAMENTO
        </button>
      </div>
    </div>
  )
}