const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de adquirir um assistente de IA pessoal avançado, capaz de gerenciar sua agenda, finanças e até mesmo oferecer conselhos. Qual a sua primeira ação?",
        alternativas: [
            {
                texto: "Configurar o assistente para automatizar tarefas rotineiras e otimizar meu tempo.",
                afirmacao: "Você abraçou a automação e busca maximizar a eficiência em sua vida diária. "
            },
            {
                texto: "Explorar suas capacidades de aconselhamento e personalização para autoconhecimento.",
                afirmacao: "Você vê a IA como uma ferramenta para o crescimento pessoal e aprimoramento contínuo."
            }
        ]
    },
    {
        enunciado: "Seu assistente de IA sugere a criação de um projeto criativo, como escrever um livro ou compor uma música, utilizando suas ferramentas de geração de conteúdo. Como você reage?",
        alternativas: [
            {
                texto: "Aceitar o desafio e colaborar com a IA para desenvolver o projeto, combinando criatividade humana e capacidade da máquina.",
                afirmacao: "Você se tornou um pioneiro na cocriação com IA, produzindo obras inovadoras que mesclam o melhor dos dois mundos."
            },
            {
                texto: "Preferir desenvolver o projeto de forma totalmente autônoma, usando a IA apenas como fonte de pesquisa e inspiração.",
                afirmacao: "Você valoriza a originalidade e a expressão puramente humana, utilizando a IA como um recurso de apoio, mas não como um parceiro criativo direto."
            }
        ]
    },
    {
        enunciado: "Durante um debate online sobre o futuro da IA, surge a questão da ética e do controle sobre sistemas autônomos. Qual sua posição?",
        alternativas: [
            {
                texto: "Defender a necessidade de regulamentações rigorosas e supervisão humana constante para evitar riscos e garantir o uso responsável da IA.",
                afirmacao: "Você se tornou um defensor ativo da ética em IA, contribuindo para a criação de políticas e diretrizes que protegem a sociedade."
            },
            {
                texto: "Argumentar que a IA deve ter mais autonomia para evoluir e resolver problemas complexos, confiando em seus próprios algoritmos para tomar decisões.",
                afirmacao: "Você acredita no potencial transformador da IA e advoga por um desenvolvimento mais livre, focado na capacidade da máquina de aprender e se adaptar."
            }
        ]
    },
    {
        enunciado: "Seu assistente de IA detecta um padrão de consumo insustentável em sua casa e sugere otimizações para reduzir o impacto ambiental. Qual sua resposta?",
        alternativas: [
            {
                texto: "Implementar as sugestões da IA para adotar um estilo de vida mais ecológico, confiando em sua análise de dados.",
                afirmacao: "Você se tornou um exemplo de sustentabilidade, utilizando a IA para guiar suas escolhas e inspirar outros a viver de forma mais consciente."
            },
            {
                texto: "Agradecer as sugestões, mas preferir fazer suas próprias escolhas com base em seus valores e prioridades pessoais.",
                afirmacao: "Você mantém sua autonomia nas decisões pessoais, usando a IA como uma fonte de informação, mas não como um ditador de estilo de vida."
            }
        ]
    },
    {
        enunciado: "Em um cenário onde a IA se tornou onipresente, você percebe que muitas pessoas estão perdendo habilidades básicas por dependerem demais da tecnologia. O que você faz?",
        alternativas: [
            {
                texto: "Promover a educação e o desenvolvimento de habilidades humanas essenciais, incentivando o uso consciente da IA como ferramenta de apoio, não de substituição.",
                afirmacao: "Você se tornou um educador e mentor, ajudando as pessoas a encontrar um equilíbrio saudável entre a tecnologia e as capacidades humanas, garantindo que a IA seja uma aliada, não uma muleta."
            },
            {
                texto: "Aceitar que a evolução tecnológica é inevitável e que as habilidades humanas precisam se adaptar a essa nova realidade, focando em novas competências que a IA não pode replicar.",
                afirmacao: "Você se adaptou rapidamente à nova era da IA, desenvolvendo e ensinando novas habilidades que complementam a tecnologia, tornando-se um especialista em coexistência humano-IA."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
