
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                Venda seu carro sem intermediários
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold">
                Venda seu carro<br />
                por um <span className="text-blue-500">preço justo</span>
              </h1>
              
              <p className="text-lg text-gray-600">
                Receba propostas melhores que as concessionárias através
                do nosso sistema de leilão direto e transparente.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1" />
                  <p>Defina seu valor mínimo aceitável</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1" />
                  <p>Receba ofertas de compradores reais</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1" />
                  <p>Sem taxas ocultas ou comissões</p>
                </div>
              </div>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Anunciar meu carro
                </Button>
                <Link to="/como-funciona" className="inline-flex items-center justify-center px-6 py-3 text-gray-700 hover:text-blue-600 font-medium bg-white border border-gray-200 rounded-md hover:border-blue-300 transition">
                  Como funciona
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg z-10">
                <div className="text-4xl font-bold">3 dias</div>
                <div className="text-gray-600">tempo médio de venda</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg z-10">
                <div className="text-4xl font-bold text-blue-500">40%</div>
                <div className="text-gray-600">mais valor em média</div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" 
                alt="Carro vermelho em uma paisagem" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
