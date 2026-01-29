import React from 'react';

const StatsCard = ({ titulo, valor, subtitulo, Icono, colorIcono }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start w-full">
      <div>
        <p className="text-gray-600 text-sm font-medium">{titulo}</p>
        <h2 className="text-3xl font-bold mt-2 text-gray-800">{valor}</h2>
        <p className="text-gray-400 text-xs mt-1">{subtitulo}</p>
      </div>
      <div className={`${colorIcono} p-2`}>
        <Icono size={20} />
      </div>
    </div>
  );
};

export default StatsCard;