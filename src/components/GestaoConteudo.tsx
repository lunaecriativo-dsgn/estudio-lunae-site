import React from "react";
import ItemTable from "@/components/ItemTable";
import Disclosure from "@/components/Disclosure";

// Conteúdo próprio das páginas de Gestão (as outras usam só as tabelas padrão do catálogo)

const Plano = ({ nome, resumo, itens }: { nome: string; resumo?: string; itens: string[] }) => (
  <article className="p-6 md:p-8 bg-white rounded-3xl border border-[#443A94]/15 shadow-sm flex flex-col gap-4">
    <h4 className="text-2xl font-display font-normal text-primary">{nome}</h4>
    {resumo && <p className="font-body text-sm text-primary font-medium leading-relaxed">{resumo}</p>}
    <ul className="space-y-2 font-body text-sm text-muted-foreground font-light leading-relaxed list-disc pl-5">
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>
);

const Texto = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-3xl mb-6">
    {children}
  </p>
);

export const ConteudoGestaoRedes = () => (
  <div className="space-y-14">
    {/* 1. Implantação */}
    <section aria-labelledby="gestao-implantacao-titulo">
      <h3 id="gestao-implantacao-titulo" className="text-2xl md:text-3xl font-display font-normal text-primary mb-2">
        1. Implantação
      </h3>
      <Texto>
        Um projeto único, antes do primeiro mês. Reúne itens da Identidade Visual e do Instagram Estratégico. Tudo fica
        com você, editável, mesmo sem a gestão.
      </Texto>
      <ItemTable
        legenda="Implantação: itens, com e sem identidade visual"
        colunas={["Serviço", "Vem de", "Com identidade", "Sem identidade"]}
        linhas={[
          ["Diagnóstico do perfil", "Instagram Estratégico", "Inclui", "Inclui"],
          ["Bio estratégica", "Instagram Estratégico", "Inclui", "Inclui"],
          ["Estudo de cores e tipografia", "Identidade Visual", "Não inclui", "Inclui"],
          ["Elementos gráficos de apoio", "Identidade Visual", "Não inclui", "Inclui"],
          ["Templates", "Identidade Visual e Instagram", "Adaptados da sua identidade", "Criados do zero"],
          ["Capas para destaques", "Instagram Estratégico", "Inclui", "Inclui"],
          ["Organização dos destaques", "Instagram Estratégico", "Inclui", "Inclui"],
        ]}
      />
    </section>

    {/* 2. Mês piloto */}
    <section aria-labelledby="gestao-piloto-titulo">
      <h3 id="gestao-piloto-titulo" className="text-2xl md:text-3xl font-display font-normal text-primary mb-2">
        2. Mês piloto <span className="text-base font-body font-light text-muted-foreground">(opcional)</span>
      </h3>
      <Texto>30 dias de teste, com materiais enxutos e reunião de resultados no dia 30.</Texto>
    </section>

    {/* 3. Gestão mensal */}
    <section aria-labelledby="gestao-mensal-titulo">
      <h3 id="gestao-mensal-titulo" className="text-2xl md:text-3xl font-display font-normal text-primary mb-2">
        3. Gestão mensal de conteúdo
      </h3>
      <Texto>
        A gestão é sempre mensal. Os Reels são feitos com vídeos enviados já editados por você.
      </Texto>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Plano nome="Constante" itens={["8 carrosséis ou posts"]} />
        <Plano nome="Presença" itens={["12 carrosséis", "Até 4 Reels", "Stories 3 vezes por semana"]} />
        <Plano
          nome="Presença+"
          itens={["12 carrosséis", "Até 8 Reels", "Stories de segunda a sexta, com repostagens"]}
        />
      </div>
      <Disclosure titulo="Extras no mês">
        <ItemTable
          ocultarLegenda
          legenda="Extras no mês"
          colunas={["Extra", "O que é"]}
          linhas={[
            ["Post avulso", "1 post de feed ou story, criado e publicado"],
            ["Carrossel avulso", "Até 8 lâminas, criado e publicado"],
            ["Pacote de 5 posts", "5 posts extras no mês"],
            ["Pacote de 4 carrosséis", "4 carrosséis extras no mês"],
            ["Edição completa de vídeo", "Edição completa de um vídeo"],
            ["Pacote de 4 edições", "4 edições de vídeo no mês"],
            ["Carrossel ilustrado", "Qualquer item dos Complementos Ilustrados"],
          ]}
        />
      </Disclosure>
    </section>
  </div>
);

export const ConteudoGestaoLeads = () => (
  <section aria-labelledby="leads-planos-titulo">
    <h3 id="leads-planos-titulo" className="text-2xl md:text-3xl font-display font-normal text-primary mb-2">
      Acompanhamento mensal
    </h3>
    <Texto>Escolha quem cuida do dia a dia dos seus contatos.</Texto>
    <div className="grid md:grid-cols-2 gap-6">
      <Plano
        nome="Organização"
        itens={["Sua equipe responde os contatos", "A gente revisa o funil toda semana", "Relatório mensal"]}
      />
      <Plano
        nome="Primeiro atendimento"
        itens={[
          "Desenho do processo na 1ª semana",
          "Direct e comentários de segunda a sexta, das 9h às 18h",
          "Triagem e encaminhamento",
          "Planilha e relatório",
          "Até 150 contatos por mês",
          "Plantão aos sábados é opcional",
        ]}
      />
    </div>
  </section>
);
