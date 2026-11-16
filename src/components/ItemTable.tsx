import React from "react";

export type Celula = string | { texto: string; sub?: string; leitor?: string };

interface ItemTableProps {
  legenda: string;
  colunas: string[]; // a primeira coluna é o cabeçalho de cada linha
  linhas: Celula[][];
  rodape?: Celula[][]; // linhas de total
  ocultarLegenda?: boolean; // quando outro elemento já mostra o título
}

const texto = (c: Celula) => (typeof c === "string" ? c : c.texto);

const renderCelula = (c: Celula) => {
  if (typeof c === "string") return c === "—" ? <Vazio /> : c;
  return (
    <>
      {c.texto === "—" ? <Vazio /> : c.texto}
      {c.sub && <span className="block mt-1 text-xs text-muted-foreground font-light">{c.sub}</span>}
    </>
  );
};

// "—" lido como "não se aplica"
const Vazio = () => (
  <>
    <span aria-hidden="true">—</span>
    <span className="sr-only">não se aplica</span>
  </>
);

// Tabela de itens. No computador é uma <table>; no celular, cada linha vira um cartão
// com os rótulos de cada coluna, sem perder informação.
export const ItemTable: React.FC<ItemTableProps> = ({ legenda, colunas, linhas, rodape = [], ocultarLegenda }) => {
  const todas = [...linhas, ...rodape];
  return (
    <div>
      {/* Computador */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#443A94]/15 bg-white shadow-sm">
        <table className="w-full text-left border-collapse font-body text-sm">
          <caption
            className={
              ocultarLegenda
                ? "sr-only"
                : "text-left font-display font-normal text-xl text-primary px-5 pt-5 pb-3"
            }
          >
            {legenda}
          </caption>
          <thead>
            <tr className="bg-[#443A94]/5">
              {colunas.map((c) => (
                <th key={c} scope="col" className="px-5 py-3 font-semibold text-primary align-bottom">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {linhas.map((linha, i) => (
              <tr key={i} className="border-t border-[#443A94]/10 align-top">
                {linha.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-5 py-4 font-semibold text-primary">
                      {renderCelula(c)}
                    </th>
                  ) : (
                    <td key={j} className={`px-5 py-4 text-muted-foreground ${j >= 2 ? "whitespace-nowrap" : ""}`}>
                      {renderCelula(c)}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
          {rodape.length > 0 && (
            <tfoot>
              {rodape.map((linha, i) => (
                <tr key={i} className="border-t-2 border-[#443A94]/20 bg-[#443A94]/5 align-top">
                  {linha.map((c, j) =>
                    j === 0 ? (
                      <th key={j} scope="row" className="px-5 py-4 font-bold text-primary">
                        {renderCelula(c)}
                      </th>
                    ) : (
                      <td key={j} className={`px-5 py-4 font-semibold text-primary ${j >= 2 ? "whitespace-nowrap" : ""}`}>
                        {renderCelula(c)}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tfoot>
          )}
        </table>
      </div>

      {/* Celular */}
      <div className="md:hidden">
        {ocultarLegenda ? (
          <p className="sr-only">{legenda}</p>
        ) : (
          <p className="font-display font-normal text-xl text-primary mb-3">{legenda}</p>
        )}
        <ul className="space-y-3">
          {todas.map((linha, i) => {
            const ehTotal = i >= linhas.length;
            return (
              <li
                key={i}
                className={`rounded-2xl border p-4 bg-white shadow-sm ${
                  ehTotal ? "border-[#443A94]/40 bg-[#443A94]/5" : "border-[#443A94]/15"
                }`}
              >
                <p className="font-body font-bold text-primary mb-2">{texto(linha[0])}</p>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 font-body text-sm">
                  {linha.slice(1).map((c, j) => (
                    <React.Fragment key={j}>
                      <dt className="text-muted-foreground font-light">{colunas[j + 1]}</dt>
                      <dd className="text-primary font-medium text-right">{renderCelula(c)}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemTable;
