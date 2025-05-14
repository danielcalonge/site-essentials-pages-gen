
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Users, BarChart, Shield, ThumbsUp, Car, Award } from 'lucide-react';

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Sobre Nós</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Revolucionando a forma como as pessoas vendem seus carros no Brasil, 
            conectando vendedores particulares diretamente a compradores reais.
          </p>
        </div>
      </div>
      
      {/* Manifesto Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Manifesto</h2>
            <p className="text-lg text-gray-600 mb-6">
              No Balcão do Carro, começamos com uma simples pergunta:
              por que existe tanta diferença entre o que a concessionária paga no seu carro e o quanto ela cobra por ele dias depois?
            </p>
            <p className="text-lg text-gray-600 mb-6">
              A resposta, infelizmente, é bem conhecida por quem já tentou vender ou comprar um carro usado: o dono perde até 40% do valor na troca, e o comprador paga caro demais por algo que poderia custar bem menos.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              A gente achou isso errado.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Foi aí que nasceu o Balcão do Carro.
              Nosso sonho é revolucionar esse mercado — aproximando pessoas, tirando o atravessador, e tornando tudo mais simples, transparente e justo.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Queremos que quem está vendendo o carro consiga um valor melhor do que teria na concessionária, e que quem está comprando possa pagar menos do que pagaria numa loja — com segurança, agilidade e confiança dos dois lados.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Somos apaixonados por facilitar essa conexão. Por isso, estamos construindo uma plataforma para que vender e comprar um carro direto com outra pessoa seja mais rápido, fácil e inteligente.
            </p>
            <p className="text-lg text-gray-600">
              O Balcão do Carro é isso:
              um novo jeito de fazer negócios com o seu carro.
              Mais justo pra quem vende. Mais leve pra quem compra. E melhor pra todo mundo.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold">15.000+</p>
              <p className="text-lg mt-2">Veículos vendidos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">R$ 40 milhões</p>
              <p className="text-lg mt-2">Em economia para vendedores</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-lg mt-2">Índice de satisfação</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Faça Parte da Revolução</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de brasileiros que já descobriram uma forma melhor de vender seus carros.
          </p>
          <a href="/criar-conta" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
            Comece a vender agora
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
