
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Camera, 
  ClipboardList, 
  DollarSign, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  Users,
  Check
} from 'lucide-react';

const SellingGuide = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-blue-500" />,
      title: "Crie seu anúncio (grátis!)",
      description: "Cadastre-se na plataforma e preencha todas as informações sobre seu carro: modelo, ano, quilometragem, cor, opcionais, estado de conservação e qualquer detalhe que possa valorizar seu veículo."
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-500" />,
      title: "Adicione boas fotos",
      description: "Capriche na iluminação e mostre todos os ângulos do carro. Boas fotos aumentam a confiança dos compradores e aceleram a venda."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Aguarde as ofertas",
      description: "Seu anúncio será exibido na plataforma e compradores reais poderão fazer propostas. Você pode acompanhar as ofertas conforme elas forem chegando."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-500" />,
      title: "Recebeu uma boa oferta? Libere o contato por R$99",
      description: "Quando uma oferta te agradar, você poderá desbloquear os contatos dos interessados mediante o pagamento único de R$99. Você terá acesso aos dados de todos que fizeram ofertas."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
      title: "Negocie diretamente com o comprador",
      description: "Entre em contato com o comprador da oferta escolhida. Marque um encontro em local seguro para ele conhecer o carro. Conversem sobre o pagamento, transferência e demais detalhes."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Finalize a venda com liberdade",
      description: "A negociação é 100% sua. O Balcão do Carro não interfere, apenas te conecta com quem quer comprar. Você decide como, quando e com quem fechar negócio."
    }
  ];

  const tips = [
    {
      title: "Comece com um preço estratégico",
      description: "Considere iniciar o anúncio com um preço semelhante ao que uma concessionária pagaria — geralmente entre 60% e 65% da Tabela Fipe. Isso atrai mais compradores para fazerem ofertas."
    },
    {
      title: "Use a plataforma para conversas iniciais",
      description: "Utilize o chat da plataforma para conversar de forma segura até sentir confiança para o contato direto com o comprador."
    },
    {
      title: "Documentação em dia",
      description: "Certifique-se que toda documentação do veículo está regularizada antes de anunciar. Isso inclui IPVA, licenciamento e possíveis multas."
    },
    {
      title: "Seja transparente",
      description: "Informe com honestidade sobre o estado do veículo, incluindo pequenos defeitos ou histórico de acidentes. A transparência gera confiança e evita cancelamentos."
    },
    {
      title: "Limpeza é fundamental",
      description: "Antes de fotografar, faça uma limpeza completa no veículo, incluindo lavagem externa, aspiração interna e polimento. Carros limpos vendem mais rápido."
    },
    {
      title: "Responda rapidamente",
      description: "Compradores valorizam vendedores que respondem com agilidade. Configure notificações para não perder mensagens importantes."
    }
  ];

  const advantages = [
    "Anuncie grátis",
    "Ofertas reais e diretas de compradores",
    "Você só paga se quiser negociar (R$99)",
    "Transparência: todos veem a melhor oferta, mas sem saber quem fez",
    "Negociação simples, entre pessoas reais"
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Guia de Venda</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Vender seu carro nunca foi tão simples, econômico e transparente. No Balcão do Carro, você anuncia de graça, recebe ofertas reais e só paga R$99 se decidir negociar.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Passo a Passo da Venda</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                  <div className="mr-4 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold">40%</p>
              <p className="text-lg mt-2">Mais valor na sua venda</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">5 dias</p>
              <p className="text-lg mt-2">Tempo médio para receber ofertas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">R$99</p>
              <p className="text-lg mt-2">Único valor cobrado (só se negociar)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dicas para Vender Mais Rápido</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Resumo das vantagens</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Guide Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Guia de Fotografia</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Boas fotos podem aumentar em até 30% as chances de vender seu carro rapidamente. 
            Siga estas dicas para conseguir imagens de qualidade:
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Ângulos Essenciais</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Frente completa do veículo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Traseira completa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Laterais (ambos os lados)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Painel e interior completo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Porta-malas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Motor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Detalhes de rodas e pneus</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Técnicas de Fotografia</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Fotografe durante o "horário dourado" (início da manhã ou fim da tarde)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Evite sombras fortes sobre o veículo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Escolha um fundo neutro, sem distrações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Mantenha a câmera estável (use tripé se possível)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Fotografe também pequenos defeitos ou arranhões</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      <span>Inclua fotos do painel com o carro ligado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para vender seu carro?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Com o Balcão do Carro, você vende seu veículo de forma rápida, segura e pelo melhor preço do mercado.
          </p>
          <a href="/criar-conta" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
            Anunciar meu carro
          </a>
          <p className="mt-4 text-gray-500">
            Dúvidas? Fale conosco pelo e-mail <a href="mailto:contato@balcaodocarro.com.br" className="text-blue-500 hover:underline">contato@balcaodocarro.com.br</a>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Última atualização: Maio de 2025
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default SellingGuide;

