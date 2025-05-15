
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Anunciar meu carro é realmente gratuito?",
      answer: "Sim! Criar e publicar um anúncio no Balcão do Carro é totalmente gratuito. Você só paga se quiser liberar os contatos das pessoas que fizeram ofertas no seu carro — e esse valor é fixo: R$99."
    },
    {
      question: "Como funciona a dinâmica de ofertas?",
      answer: "Você anuncia seu carro e define um preço inicial (recomendamos começar com o valor que uma concessionária pagaria, cerca de 60% a 65% da Tabela Fipe). Conforme os compradores visualizam seu anúncio, eles fazem ofertas. A melhor oferta aparece publicamente no anúncio, como referência, mas ninguém sabe quem fez."
    },
    {
      question: "Por que vale a pena anunciar com um preço inicial mais baixo?",
      answer: "Quanto menor o valor do anúncio, maior o número de compradores interessados. O Balcão do Carro tem uma dinâmica inteligente de notificação: toda vez que uma nova oferta é feita, todas as pessoas que já fizeram propostas anteriormente recebem um aviso. Isso cria uma disputa natural entre compradores, fazendo com que os carros anunciados por preços mais baixos atraiam mais atenção, recebam mais ofertas e — na maioria das vezes — sejam vendidos mais rápido e por valores mais altos."
    },
    {
      question: "Quando eu pago os R$99?",
      answer: "Você só paga se quiser liberar os contatos dos compradores que fizeram ofertas. Após o pagamento, você poderá entrar em contato com qualquer um deles para negociar diretamente."
    },
    {
      question: "E se eu não gostar de nenhuma oferta?",
      answer: "Sem problema. Você não paga nada e pode manter o anúncio no ar, ajustando o preço se quiser. Só paga os R$99 se quiser negociar com alguém."
    },
    {
      question: "O que acontece após eu pagar os R$99?",
      answer: "Você recebe acesso aos dados de contato (telefone, e-mail e chat na plataforma) de todas as pessoas que fizeram propostas. A negociação passa a ser direta entre você e o comprador."
    },
    {
      question: "Posso vender o carro para quem eu quiser?",
      answer: "Sim! Você pode escolher com quem quer negociar, como vai receber o pagamento e onde será feito o encontro. O Balcão do Carro apenas facilita o contato."
    },
    {
      question: "O Balcão do Carro participa da negociação ou da transferência do veículo?",
      answer: "Não. Toda negociação, pagamento e transferência são de inteira responsabilidade entre vendedor e comprador. O Balcão do Carro é apenas uma plataforma de anúncios que conecta pessoas interessadas em vender e comprar veículos. Recomendamos que ambas as partes realizem a transação com segurança e dentro da legalidade."
    },
    {
      question: "Quais cuidados de segurança devo ter ao negociar?",
      answer: "Negociar diretamente com outra pessoa pode ser seguro se você seguir algumas boas práticas:\n\nPara o vendedor:\n• Nunca entregue o carro ou documentos antes de o pagamento ser efetivado.\n• Confirme se o valor foi realmente creditado na sua conta antes de transferir o veículo. Não confie em comprovantes.\n\nPara o comprador:\n• Certifique-se de que o vendedor é realmente o proprietário do veículo, verificando o CRLV.\n• Consulte a situação do veículo no site do Detran: restrições, multas e débitos.\n\nPara ambos:\n• Marquem encontros em locais públicos e movimentados, como estacionamentos de shoppings ou agências bancárias.\n• Levem alguém de confiança para acompanhar.\n• Se possível, façam a vistoria juntos em um local especializado antes de fechar negócio.\n\nSeguindo essas recomendações, a venda ou compra do carro será mais segura e tranquila para todos os envolvidos."
    },
    {
      question: "Como entro em contato com o suporte?",
      answer: "Envie um e-mail para: contato@balcaodocarro.com.br. Nosso time está pronto para te ajudar."
    }
  ];

  return (
    <PageLayout>
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Perguntas Frequentes</h1>
          <p className="text-center text-gray-600 mb-12">Tudo o que você precisa saber sobre vender seu carro na plataforma Balcão do Carro</p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 whitespace-pre-line">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
            <a href="/contato" className="text-blue-500 font-medium hover:text-blue-700">Entre em contato conosco</a>
            <p className="text-gray-400 text-sm mt-8">Última atualização: Maio de 2025</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
