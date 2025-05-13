
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Camera, 
  ClipboardList, 
  DollarSign, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

const SellingGuide = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-blue-500" />,
      title: "Cadastre seu veículo",
      description: "Preencha o formulário com informações detalhadas sobre seu carro, incluindo marca, modelo, ano, quilometragem e histórico de manutenção."
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-500" />,
      title: "Adicione fotos de qualidade",
      description: "Tire fotos nítidas do exterior e interior do veículo. Imagens de qualidade aumentam a confiança dos compradores e aceleram a venda."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-500" />,
      title: "Defina seu preço mínimo",
      description: "Estabeleça o valor mínimo que você aceita pelo seu carro. O sistema não permitirá ofertas abaixo desse valor."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
      title: "Verifique seu anúncio",
      description: "Nosso time verificará as informações para garantir a qualidade do anúncio, evitando problemas futuros na negociação."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Receba ofertas de compradores",
      description: "Após a aprovação, seu anúncio ficará visível para compradores verificados que poderão fazer ofertas pelo seu veículo."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
      title: "Negocie com segurança",
      description: "Use nosso chat interno para tirar dúvidas e negociar com os interessados de forma segura e transparente."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Finalize a venda",
      description: "Após aceitar uma oferta, nosso sistema guiará você e o comprador pelo processo de pagamento e transferência do veículo."
    }
  ];

  const tips = [
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
      title: "Preço competitivo",
      description: "Pesquise o valor de mercado do seu modelo e defina um preço realista. Veículos com preços muito acima do mercado demoram mais para vender."
    },
    {
      title: "Responda rapidamente",
      description: "Compradores valorizam vendedores que respondem com agilidade. Configure notificações para não perder mensagens importantes."
    },
    {
      title: "Tenha histórico de manutenção",
      description: "Se possível, tenha em mãos o histórico de revisões e manutenções do veículo. Isso transmite segurança e pode justificar um valor mais alto."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Guia de Venda</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Aprenda como vender seu carro rapidamente, com segurança e pelo melhor preço possível.
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
              <p className="text-4xl font-bold">3 dias</p>
              <p className="text-lg mt-2">Tempo médio de venda</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">40%</p>
              <p className="text-lg mt-2">Mais valor que em concessionárias</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">95%</p>
              <p className="text-lg mt-2">Taxa de conclusão de vendas</p>
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

      {/* Photography Guide Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Guia de Fotografia</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Boas fotos podem aumentar em até 30% as chances de vender seu carro rapidamente. 
            Siga estas dicas para conseguir imagens de qualidade:
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
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
            Com o SemAtravessador, você vende seu veículo de forma rápida, segura e pelo melhor preço do mercado.
          </p>
          <a href="/criar-conta" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
            Anunciar meu carro
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default SellingGuide;
