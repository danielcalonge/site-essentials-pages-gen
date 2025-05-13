
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Como funciona o processo de venda no SemAtravessador?",
      answer: "O processo é simples: você cadastra seu veículo, define seu preço mínimo, recebe propostas de compradores cadastrados em nossa plataforma e escolhe a melhor oferta. Nosso sistema de leilão garante transparência e o melhor preço para seu carro."
    },
    {
      question: "Quais são as taxas cobradas?",
      answer: "Não cobramos comissões sobre a venda. Temos apenas uma taxa fixa de anúncio, que é cobrada somente quando você decide publicar seu veículo na plataforma. Todas as taxas são claramente informadas antes de você confirmar o anúncio."
    },
    {
      question: "Quanto tempo leva para vender meu carro?",
      answer: "O tempo médio de venda é de 3 dias, mas pode variar dependendo do modelo, ano, condições do veículo e preço solicitado. Veículos com preços competitivos costumam vender mais rapidamente."
    },
    {
      question: "Como sei que receberei o pagamento pelo meu veículo?",
      answer: "Nós intermediamos todo o processo de pagamento através da nossa plataforma segura. O dinheiro é depositado em uma conta garantidora e só é liberado para o vendedor quando o comprador confirma o recebimento do veículo nas condições anunciadas."
    },
    {
      question: "É preciso levar o carro para algum lugar?",
      answer: "Não. As visitas e avaliações acontecem no local que você determinar. Você só precisa se deslocar para finalizar a documentação de transferência, caso prefira fazer isso pessoalmente."
    },
    {
      question: "Como funciona a transferência de documentação?",
      answer: "Após a venda, orientamos ambas as partes sobre o processo de transferência. Você pode optar por fazer o processo pessoalmente ou utilizar nosso serviço de despachante parceiro, que cuida de toda a burocracia por uma taxa adicional."
    },
    {
      question: "O que acontece se o comprador desistir da compra?",
      answer: "Caso o comprador desista após o pagamento, ele perde uma taxa de compromisso que é revertida para você como compensação pelo tempo perdido. Seu anúncio volta a ficar ativo na plataforma automaticamente."
    },
    {
      question: "Posso cancelar meu anúncio a qualquer momento?",
      answer: "Sim, você pode cancelar seu anúncio a qualquer momento antes de aceitar uma oferta. Caso já tenha aceitado uma oferta mas a negociação não tenha sido concluída, podem haver penalidades conforme nossos termos de uso."
    },
    {
      question: "Como são verificados os compradores?",
      answer: "Todos os compradores passam por um processo de verificação que inclui validação de documentos pessoais, consulta em órgãos de proteção ao crédito e histórico na plataforma. Apenas compradores verificados podem fazer ofertas pelo seu veículo."
    },
    {
      question: "É possível negociar o preço?",
      answer: "Sim. Embora você defina um preço mínimo aceitável, os compradores podem fazer ofertas acima desse valor. Você decide se aceita ou não, e pode fazer contrapropostas."
    }
  ];

  return (
    <PageLayout>
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Perguntas Frequentes</h1>
          <p className="text-center text-gray-600 mb-12">Tudo o que você precisa saber sobre vender seu carro na plataforma SemAtravessador</p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
            <a href="/contato" className="text-blue-500 font-medium hover:text-blue-700">Entre em contato conosco</a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
