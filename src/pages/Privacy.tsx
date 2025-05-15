import React from 'react';
import PageLayout from '@/components/PageLayout';

const Privacy = () => {
  return (
    <PageLayout>
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Política de Privacidade – Balcão do Carro</h1>
          <p className="text-center text-gray-600 mt-2">Última atualização: Maio de 2025</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <p className="text-gray-600 mb-8">
            O Balcão do Carro respeita a sua privacidade e está comprometido com a transparência no tratamento dos seus dados pessoais. 
            Esta Política de Privacidade explica quais dados coletamos, por que coletamos e como você pode gerenciar suas informações.
          </p>
          
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Controlador dos Dados</h2>
            <p className="text-gray-600">
              A responsável pelo tratamento dos dados é a empresa Balcão do Carro, com sede em Belo Horizonte/MG. 
              Para qualquer dúvida, entre em contato pelo e-mail: <a href="mailto:contato@balcaodocarro.com.br" className="text-blue-600 hover:underline">contato@balcaodocarro.com.br</a>
            </p>
          </section>
          
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Quais dados coletamos</h2>
            <p className="text-gray-600 mb-4">
              Podemos coletar os seguintes dados pessoais:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Nome completo</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>CPF (quando necessário)</li>
              <li>Informações sobre veículos anunciados</li>
              <li>Dados de navegação, como IP, cookies, geolocalização (se autorizada)</li>
              <li>Mensagens trocadas na plataforma</li>
            </ul>
          </section>
          
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Finalidade do uso dos dados</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos seus dados para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Criar e gerenciar sua conta</li>
              <li>Permitir que você publique e gerencie anúncios</li>
              <li>Facilitar a comunicação entre compradores e vendedores</li>
              <li>Prevenir fraudes e garantir segurança</li>
              <li>Enviar notificações e atualizações da plataforma</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>
          
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Compartilhamento de dados</h2>
            <p className="text-gray-600">
              Não vendemos seus dados. Podemos compartilhá-los com prestadores de serviços que nos ajudam 
              a operar a plataforma (ex: serviços de hospedagem, comunicação, análise de dados), sempre seguindo 
              exigências legais e contratuais.
            </p>
          </section>
          
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Uso de cookies</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos cookies para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Lembrar suas preferências</li>
              <li>Melhorar sua experiência de navegação</li>
              <li>Medir e analisar o uso da plataforma</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar funcionalidades do site.
            </p>
          </section>
          
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Segurança dos dados</h2>
            <p className="text-gray-600">
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, 
              alterações, divulgações ou destruição. Utilizamos criptografia, controle de acesso e monitoramento contínuo.
            </p>
          </section>
          
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Seus direitos</h2>
            <p className="text-gray-600 mb-4">
              Você pode, a qualquer momento:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Acessar os dados que temos sobre você</li>
              <li>Solicitar correção de informações incorretas</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar consentimentos previamente dados</li>
              <li>Solicitar a portabilidade de dados a outro fornecedor</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Para exercer seus direitos, entre em contato com nosso time de privacidade via e-mail: <a href="mailto:contato@balcaodocarro.com.br" className="text-blue-600 hover:underline">contato@balcaodocarro.com.br</a>
            </p>
          </section>
          
          <hr className="my-8 border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Alterações nesta política</h2>
            <p className="text-gray-600">
              Esta política pode ser atualizada a qualquer momento para refletir mudanças na legislação 
              ou em nossos processos. Recomendamos a leitura periódica.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacy;
