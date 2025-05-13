
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Terms = () => {
  return (
    <PageLayout>
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Termos de Uso</h1>
          <p className="text-center text-gray-600 mt-2">Última atualização: 13 de Maio de 2025</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 mb-4">
              Ao acessar e utilizar a plataforma SemAtravessador, você concorda em cumprir e estar sujeito a estes Termos de Uso. 
              Se você não concordar com qualquer parte destes termos, por favor, não utilize nossos serviços.
            </p>
            <p className="text-gray-600">
              Estes termos constituem um acordo legal entre você e SemAtravessador, referindo-se ao uso do site, 
              aplicativo e serviços oferecidos pela plataforma.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-600 mb-4">
              SemAtravessador é uma plataforma que conecta vendedores de veículos diretamente a compradores interessados, 
              eliminando a necessidade de intermediários no processo de compra e venda.
            </p>
            <p className="text-gray-600 mb-4">
              Nossos serviços incluem, mas não estão limitados a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Criação de anúncios de veículos</li>
              <li>Sistema de leilão para recebimento de ofertas</li>
              <li>Verificação de potenciais compradores</li>
              <li>Intermediação da negociação entre as partes</li>
              <li>Suporte durante o processo de transferência do veículo</li>
            </ul>
            <p className="text-gray-600">
              Reservamo-nos o direito de modificar ou descontinuar, temporariamente ou permanentemente, 
              o serviço ou parte dele com ou sem aviso prévio.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Cadastro e Conta</h2>
            <p className="text-gray-600 mb-4">
              Para utilizar completamente nossos serviços, você precisará criar uma conta na plataforma SemAtravessador. 
              Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrerem em sua conta.
            </p>
            <p className="text-gray-600">
              Você concorda em:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Fornecer informações precisas, atuais e completas durante o processo de registro</li>
              <li>Manter e atualizar prontamente seus dados para mantê-los precisos e completos</li>
              <li>Notificar imediatamente a SemAtravessador sobre qualquer uso não autorizado de sua conta</li>
              <li>Ser o único responsável por todas as atividades realizadas com suas credenciais de login</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Regras de Conduta</h2>
            <p className="text-gray-600 mb-4">
              Ao utilizar nossa plataforma, você concorda em não:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Fornecer informações falsas sobre você ou sobre os veículos anunciados</li>
              <li>Utilizar a plataforma para qualquer propósito ilegal ou não autorizado</li>
              <li>Interferir no funcionamento adequado do site ou aplicativo</li>
              <li>Tentar acessar contas ou dados de outros usuários</li>
              <li>Assediar, ameaçar ou fraudar outros usuários da plataforma</li>
              <li>Publicar conteúdo que seja ofensivo, difamatório, obsceno ou de qualquer forma inapropriado</li>
              <li>Tentar contornar o sistema de pagamento da plataforma para evitar taxas</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Taxas e Pagamentos</h2>
            <p className="text-gray-600 mb-4">
              A SemAtravessador cobra uma taxa fixa pelo serviço de anúncio de veículos na plataforma. 
              Esta taxa é claramente informada antes da publicação do anúncio e não há comissões adicionais 
              sobre o valor da venda.
            </p>
            <p className="text-gray-600 mb-4">
              O pagamento da taxa de anúncio deve ser realizado através dos métodos disponibilizados na plataforma. 
              Todos os pagamentos são processados por gateways de pagamento seguros e criptografados.
            </p>
            <p className="text-gray-600">
              O cancelamento de um anúncio após sua publicação não gera direito à devolução da taxa paga, 
              conforme informado no momento da contratação do serviço.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Responsabilidades</h2>
            <p className="text-gray-600 mb-4">
              <strong>6.1 Responsabilidades dos Vendedores:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Fornecer informações precisas e completas sobre o veículo anunciado</li>
              <li>Disponibilizar o veículo para visitas e inspeções quando solicitado</li>
              <li>Manter a veracidade das informações sobre documentação e estado do veículo</li>
              <li>Cumprir os compromissos assumidos durante a negociação</li>
              <li>Responsabilizar-se pela transferência de propriedade do veículo após a venda</li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              <strong>6.2 Responsabilidades dos Compradores:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Fazer ofertas reais e com intenção verdadeira de compra</li>
              <li>Cumprir com o pagamento conforme acordado na negociação</li>
              <li>Realizar a inspeção do veículo antes de concluir a compra</li>
              <li>Colaborar com o processo de transferência de propriedade</li>
            </ul>
            
            <p className="text-gray-600">
              <strong>6.3 Limitação de Responsabilidade da SemAtravessador:</strong><br />
              A plataforma atua como intermediária na conexão entre compradores e vendedores, não sendo 
              responsável pela qualidade dos veículos anunciados ou pelo cumprimento das obrigações 
              assumidas pelas partes. Realizamos verificações básicas, mas recomendamos que compradores 
              façam inspeções detalhadas antes de concluir qualquer negociação.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Alterações nos Termos</h2>
            <p className="text-gray-600">
              A SemAtravessador reserva-se o direito de modificar estes Termos de Uso a qualquer momento, 
              sendo as alterações efetivas após sua publicação na plataforma. O uso contínuo dos serviços 
              após as alterações constitui sua aceitação dos novos termos. Recomendamos verificar 
              periodicamente esta página para se manter informado sobre atualizações.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Lei Aplicável</h2>
            <p className="text-gray-600">
              Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil. 
              Qualquer disputa decorrente do uso da plataforma será submetida à jurisdição exclusiva 
              dos tribunais brasileiros.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
            <p className="text-gray-600">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email 
              termos@sematravessador.com.br ou pelo nosso formulário de contato disponível na plataforma.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
